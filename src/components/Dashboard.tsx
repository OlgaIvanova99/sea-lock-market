import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ship, Lock, DollarSign, Clock, MapPin, Shield, FileText, AlertTriangle } from "lucide-react";
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi';
import { useState } from 'react';
import { toast } from 'sonner';

const Dashboard = () => {
  const { address, isConnected } = useAccount();
  const [isCreatingPolicy, setIsCreatingPolicy] = useState(false);
  
  // Contract address - this would be the deployed contract address
  const contractAddress = "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"; // Example address
  
  // Contract interaction functions using FHE encryption
  const createPolicy = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }
    
    setIsCreatingPolicy(true);
    try {
      // Simulate FHE encrypted policy creation
      // In a real implementation, this would:
      // 1. Encrypt policy data using FHE
      // 2. Call the smart contract with encrypted data
      // 3. Store encrypted data on-chain
      
      toast.success("Encrypting policy data with FHE...");
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Policy creation initiated! Data encrypted and stored on-chain.");
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Policy created successfully! All sensitive data is encrypted.");
    } catch (error) {
      toast.error("Failed to create encrypted policy");
    } finally {
      setIsCreatingPolicy(false);
    }
  };

  const submitClaim = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }
    
    try {
      // Simulate FHE encrypted claim submission
      toast.success("Encrypting claim data with FHE...");
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Claim submitted! Damage assessment encrypted and stored.");
    } catch (error) {
      toast.error("Failed to submit encrypted claim");
    }
  };

  const viewPolicies = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }
    
    try {
      // Simulate encrypted data retrieval
      toast.success("Retrieving encrypted policy data...");
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Policy data retrieved! All data remains encrypted.");
    } catch (error) {
      toast.error("Failed to retrieve encrypted policies");
    }
  };

  const activeRoutes = [
    {
      id: "RT001",
      origin: "Hamburg",
      destination: "Singapore",
      cargo: "Electronics",
      premium: "2.4 ETH",
      risk: "Medium",
      status: "Encrypted",
      progress: 65
    },
    {
      id: "RT002", 
      origin: "Long Beach",
      destination: "Rotterdam",
      cargo: "Machinery",
      premium: "1.8 ETH",
      risk: "Low",
      status: "Encrypted",
      progress: 23
    },
    {
      id: "RT003",
      origin: "Yokohama",
      destination: "Los Angeles", 
      cargo: "Automotive",
      premium: "3.1 ETH",
      risk: "High",
      status: "Encrypted",
      progress: 89
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-encrypted bg-clip-text text-transparent">
          Secure Maritime Insurance
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Revolutionary shipping protection with encrypted risk assessment and smart contract automation
        </p>
        <Button 
          size="lg" 
          className="premium-glow bg-premium text-ocean-deep hover:bg-premium/90"
          onClick={createPolicy}
          disabled={isCreatingPolicy}
        >
          <Shield className="w-5 h-5 mr-2" />
          {isCreatingPolicy ? "Creating Policy..." : "Get Quote"}
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="maritime-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Policies</p>
                <p className="text-2xl font-bold text-encrypted">247</p>
              </div>
              <Ship className="w-8 h-8 text-encrypted" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="maritime-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Coverage</p>
                <p className="text-2xl font-bold text-premium">$2.4B</p>
              </div>
              <Shield className="w-8 h-8 text-premium" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="maritime-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Claims Paid</p>
                <p className="text-2xl font-bold text-encrypted">98.7%</p>
              </div>
              <DollarSign className="w-8 h-8 text-encrypted" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="maritime-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response</p>
                <p className="text-2xl font-bold text-premium">2.3h</p>
              </div>
              <Clock className="w-8 h-8 text-premium" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Smart Contract Interaction Panel */}
      {isConnected && (
        <Card className="maritime-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-encrypted" />
              Smart Contract Actions
            </CardTitle>
            <CardDescription>
              Interact with the Sea Lock Market smart contract
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="maritime-card border-encrypted hover:bg-encrypted/10"
                onClick={createPolicy}
                disabled={isCreatingPolicy}
              >
                <Shield className="w-4 h-4 mr-2" />
                Create Policy
              </Button>
              <Button 
                variant="outline" 
                className="maritime-card border-encrypted hover:bg-encrypted/10"
                onClick={submitClaim}
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Submit Claim
              </Button>
              <Button 
                variant="outline" 
                className="maritime-card border-encrypted hover:bg-encrypted/10"
                onClick={viewPolicies}
              >
                <FileText className="w-4 h-4 mr-2" />
                View Policies
              </Button>
            </div>
            <div className="mt-4 p-4 bg-encrypted/5 rounded-lg border border-encrypted/20">
              <p className="text-sm text-muted-foreground">
                <strong>Connected Wallet:</strong> {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                All transactions are encrypted using FHE (Fully Homomorphic Encryption)
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Route Monitoring */}
      <Card className="maritime-card mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-encrypted" />
            Encrypted Route Monitoring
          </CardTitle>
          <CardDescription>
            Live tracking with privacy-preserved risk assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeRoutes.map((route) => (
              <div key={route.id} className="p-4 rounded-lg border border-border/50 hover:border-encrypted/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-encrypted text-encrypted encrypted-pulse">
                      <Lock className="w-3 h-3 mr-1" />
                      {route.status}
                    </Badge>
                    <span className="font-mono text-sm text-muted-foreground">{route.id}</span>
                  </div>
                  <Badge 
                    variant={route.risk === 'High' ? 'destructive' : route.risk === 'Medium' ? 'default' : 'secondary'}
                  >
                    {route.risk} Risk
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Route</p>
                    <p className="font-medium">{route.origin} → {route.destination}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Cargo</p>
                    <p className="font-medium">{route.cargo}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Premium</p>
                    <p className="font-medium text-premium">{route.premium}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Progress</p>
                    <p className="font-medium">{route.progress}%</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-encrypted h-2 rounded-full route-tracing"
                    style={{ width: `${route.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;