// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract SeaLockMarket is SepoliaConfig {
    using FHE for *;
    
    struct InsurancePolicy {
        euint32 policyId;
        euint32 premium;
        euint32 coverage;
        euint32 riskScore;
        bool isActive;
        bool isClaimed;
        string policyType;
        string description;
        address policyholder;
        address insurer;
        uint256 startTime;
        uint256 endTime;
    }
    
    struct Claim {
        euint32 claimId;
        euint32 amount;
        euint32 damageAssessment;
        bool isApproved;
        bool isProcessed;
        string claimReason;
        string evidenceHash;
        address claimant;
        uint256 timestamp;
    }
    
    struct RiskProfile {
        euint32 riskScore;
        euint32 claimHistory;
        euint32 reputation;
        bool isVerified;
        address profileOwner;
        uint256 lastUpdated;
    }
    
    mapping(uint256 => InsurancePolicy) public policies;
    mapping(uint256 => Claim) public claims;
    mapping(address => RiskProfile) public riskProfiles;
    mapping(address => euint32) public userReputation;
    mapping(string => euint32) public marketRates;
    
    uint256 public policyCounter;
    uint256 public claimCounter;
    
    address public owner;
    address public verifier;
    address public oracle;
    
    event PolicyCreated(uint256 indexed policyId, address indexed policyholder, string policyType);
    event ClaimSubmitted(uint256 indexed claimId, uint256 indexed policyId, address indexed claimant);
    event ClaimProcessed(uint256 indexed claimId, bool approved, uint32 amount);
    event RiskProfileUpdated(address indexed user, uint32 riskScore);
    event ReputationUpdated(address indexed user, uint32 reputation);
    event EncryptedDataStored(uint256 indexed dataId, string dataType);
    
    constructor(address _verifier, address _oracle) {
        owner = msg.sender;
        verifier = _verifier;
        oracle = _oracle;
    }
    
    function createPolicy(
        string memory _policyType,
        string memory _description,
        externalEuint32 _premium,
        externalEuint32 _coverage,
        uint256 _duration,
        bytes calldata _premiumProof,
        bytes calldata _coverageProof
    ) public returns (uint256) {
        require(bytes(_policyType).length > 0, "Policy type cannot be empty");
        require(_duration > 0, "Duration must be positive");
        
        uint256 policyId = policyCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalPremium = FHE.fromExternal(_premium, _premiumProof);
        euint32 internalCoverage = FHE.fromExternal(_coverage, _coverageProof);
        
        // Calculate risk score based on user profile
        euint32 riskScore = calculateRiskScore(msg.sender, _policyType);
        
        policies[policyId] = InsurancePolicy({
            policyId: FHE.asEuint32(0), // Will be set properly later
            premium: internalPremium,
            coverage: internalCoverage,
            riskScore: riskScore,
            isActive: true,
            isClaimed: false,
            policyType: _policyType,
            description: _description,
            policyholder: msg.sender,
            insurer: address(this), // Self-insured for now
            startTime: block.timestamp,
            endTime: block.timestamp + _duration
        });
        
        emit PolicyCreated(policyId, msg.sender, _policyType);
        emit EncryptedDataStored(policyId, "policy");
        return policyId;
    }
    
    function submitClaim(
        uint256 policyId,
        string memory _claimReason,
        string memory _evidenceHash,
        externalEuint32 _damageAmount,
        bytes calldata _damageProof
    ) public returns (uint256) {
        require(policies[policyId].policyholder == msg.sender, "Only policyholder can submit claim");
        require(policies[policyId].isActive, "Policy must be active");
        require(block.timestamp <= policies[policyId].endTime, "Policy has expired");
        
        uint256 claimId = claimCounter++;
        
        // Convert external encrypted damage amount to internal
        euint32 internalDamageAmount = FHE.fromExternal(_damageAmount, _damageProof);
        
        claims[claimId] = Claim({
            claimId: FHE.asEuint32(0), // Will be set properly later
            amount: internalDamageAmount,
            damageAssessment: internalDamageAmount,
            isApproved: false,
            isProcessed: false,
            claimReason: _claimReason,
            evidenceHash: _evidenceHash,
            claimant: msg.sender,
            timestamp: block.timestamp
        });
        
        emit ClaimSubmitted(claimId, policyId, msg.sender);
        emit EncryptedDataStored(claimId, "claim");
        return claimId;
    }
    
    function processClaim(
        uint256 claimId,
        bool approved,
        externalEuint32 _approvedAmount,
        bytes calldata _amountProof
    ) public {
        require(msg.sender == verifier || msg.sender == oracle, "Only verifier or oracle can process claims");
        require(!claims[claimId].isProcessed, "Claim already processed");
        
        euint32 approvedAmount = FHE.fromExternal(_approvedAmount, _amountProof);
        
        claims[claimId].isApproved = approved;
        claims[claimId].isProcessed = true;
        claims[claimId].amount = approvedAmount;
        
        if (approved) {
            // Update policy status
            uint256 policyId = getPolicyIdFromClaim(claimId);
            policies[policyId].isClaimed = true;
        }
        
        emit ClaimProcessed(claimId, approved, 0); // Amount will be decrypted off-chain
    }
    
    function updateRiskProfile(
        address user,
        externalEuint32 _riskScore,
        externalEuint32 _claimHistory,
        bytes calldata _riskProof,
        bytes calldata _claimProof
    ) public {
        require(msg.sender == oracle || msg.sender == verifier, "Only oracle or verifier can update risk profiles");
        
        euint32 riskScore = FHE.fromExternal(_riskScore, _riskProof);
        euint32 claimHistory = FHE.fromExternal(_claimHistory, _claimProof);
        
        riskProfiles[user] = RiskProfile({
            riskScore: riskScore,
            claimHistory: claimHistory,
            reputation: FHE.asEuint32(0), // Will be calculated
            isVerified: true,
            profileOwner: user,
            lastUpdated: block.timestamp
        });
        
        emit RiskProfileUpdated(user, 0); // Risk score will be decrypted off-chain
        emit EncryptedDataStored(uint256(uint160(user)), "risk_profile");
    }
    
    function updateReputation(address user, externalEuint32 _reputation, bytes calldata _reputationProof) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        
        euint32 reputation = FHE.fromExternal(_reputation, _reputationProof);
        userReputation[user] = reputation;
        
        emit ReputationUpdated(user, 0); // Reputation will be decrypted off-chain
        emit EncryptedDataStored(uint256(uint160(user)), "reputation");
    }
    
    function storeEncryptedMarketData(
        string memory dataType,
        externalEuint32 encryptedData,
        bytes calldata dataProof
    ) public {
        require(msg.sender == oracle || msg.sender == verifier, "Only oracle or verifier can store market data");
        
        euint32 internalData = FHE.fromExternal(encryptedData, dataProof);
        marketRates[dataType] = internalData;
        
        emit EncryptedDataStored(block.timestamp, dataType);
    }
    
    function calculateRiskScore(address user, string memory policyType) internal view returns (euint32) {
        RiskProfile storage profile = riskProfiles[user];
        
        // Base risk calculation (simplified)
        euint32 baseRisk = FHE.asEuint32(50); // Base risk score of 50
        
        if (profile.isVerified) {
            // Adjust based on historical data
            baseRisk = FHE.add(baseRisk, profile.claimHistory);
            baseRisk = FHE.sub(baseRisk, profile.riskScore);
        }
        
        // Adjust based on policy type
        if (keccak256(bytes(policyType)) == keccak256(bytes("high-risk"))) {
            baseRisk = FHE.add(baseRisk, FHE.asEuint32(20));
        }
        
        return baseRisk;
    }
    
    function getPolicyInfo(uint256 policyId) public view returns (
        string memory policyType,
        string memory description,
        uint8 premium,
        uint8 coverage,
        uint8 riskScore,
        bool isActive,
        bool isClaimed,
        address policyholder,
        address insurer,
        uint256 startTime,
        uint256 endTime
    ) {
        InsurancePolicy storage policy = policies[policyId];
        return (
            policy.policyType,
            policy.description,
            0, // FHE.decrypt(policy.premium) - will be decrypted off-chain
            0, // FHE.decrypt(policy.coverage) - will be decrypted off-chain
            0, // FHE.decrypt(policy.riskScore) - will be decrypted off-chain
            policy.isActive,
            policy.isClaimed,
            policy.policyholder,
            policy.insurer,
            policy.startTime,
            policy.endTime
        );
    }
    
    function getClaimInfo(uint256 claimId) public view returns (
        uint8 amount,
        uint8 damageAssessment,
        bool isApproved,
        bool isProcessed,
        string memory claimReason,
        string memory evidenceHash,
        address claimant,
        uint256 timestamp
    ) {
        Claim storage claim = claims[claimId];
        return (
            0, // FHE.decrypt(claim.amount) - will be decrypted off-chain
            0, // FHE.decrypt(claim.damageAssessment) - will be decrypted off-chain
            claim.isApproved,
            claim.isProcessed,
            claim.claimReason,
            claim.evidenceHash,
            claim.claimant,
            claim.timestamp
        );
    }
    
    function getRiskProfile(address user) public view returns (
        uint8 riskScore,
        uint8 claimHistory,
        uint8 reputation,
        bool isVerified,
        uint256 lastUpdated
    ) {
        RiskProfile storage profile = riskProfiles[user];
        return (
            0, // FHE.decrypt(profile.riskScore) - will be decrypted off-chain
            0, // FHE.decrypt(profile.claimHistory) - will be decrypted off-chain
            0, // FHE.decrypt(profile.reputation) - will be decrypted off-chain
            profile.isVerified,
            profile.lastUpdated
        );
    }
    
    function getPolicyIdFromClaim(uint256 claimId) internal view returns (uint256) {
        // This is a simplified implementation
        // In a real scenario, you'd need to track the relationship between claims and policies
        return claimId; // Placeholder
    }
    
    // Emergency functions for contract management
    function pauseContract() public {
        require(msg.sender == owner, "Only owner can pause");
        // Implementation for pausing contract
    }
    
    function unpauseContract() public {
        require(msg.sender == owner, "Only owner can unpause");
        // Implementation for unpausing contract
    }
    
    function updateVerifier(address newVerifier) public {
        require(msg.sender == owner, "Only owner can update verifier");
        verifier = newVerifier;
    }
    
    function updateOracle(address newOracle) public {
        require(msg.sender == owner, "Only owner can update oracle");
        oracle = newOracle;
    }
}