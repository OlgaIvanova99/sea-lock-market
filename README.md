# 🌊 Sea Lock Market

> **Revolutionary Maritime Insurance Platform with FHE Privacy Protection**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## 🚢 Overview

Sea Lock Market is a cutting-edge decentralized insurance marketplace that revolutionizes maritime cargo protection through **Fully Homomorphic Encryption (FHE)** technology. Our platform ensures complete privacy for sensitive shipping data while providing transparent, automated insurance solutions.

### ✨ Key Features

- 🔐 **FHE Privacy Protection** - All sensitive data encrypted using advanced homomorphic encryption
- 🚢 **Maritime Focus** - Specialized shipping route protection and cargo tracking
- 💼 **Multi-Wallet Support** - Seamless integration with Rainbow, MetaMask, and other wallets
- 📊 **Smart Contracts** - Automated policy management and claim processing
- 🌐 **Real-time Analytics** - Comprehensive dashboard with market insights

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast build tooling
- **Tailwind CSS** for responsive, modern styling
- **shadcn/ui** for accessible component library

### Blockchain Integration
- **RainbowKit** for intuitive wallet connection
- **Wagmi** for Ethereum interactions
- **Viem** for blockchain utilities
- **Ethers.js** for contract interactions

### Smart Contracts
- **Solidity** with FHE encryption capabilities
- **Zama Network** integration for privacy
- **Sepolia Testnet** deployment ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/OlgaIvanova99/sea-lock-market.git
cd sea-lock-market

# Install dependencies
npm install

# Copy environment configuration
cp env.example .env

# Start development server
npm run dev
```

### Environment Configuration

Create a `.env` file with the following variables:

```env
# Blockchain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_ID
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_KEY
```

## 📋 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🏗️ Project Structure

```
sea-lock-market/
├── contracts/                 # Smart contracts
│   └── SeaLockMarket.sol     # FHE-enabled insurance contract
├── src/
│   ├── components/           # React components
│   │   ├── Header.tsx        # Navigation with wallet connection
│   │   ├── Dashboard.tsx     # Main dashboard
│   │   └── ui/              # Reusable UI components
│   ├── lib/
│   │   └── wallet.ts        # Wallet configuration
│   ├── pages/               # Application pages
│   └── App.tsx              # Main application
├── public/
│   └── logo.svg             # Application logo
├── vercel.json              # Vercel deployment config
└── README.md                # This file
```

## 🔒 Security Features

### FHE Encryption
- **Private Computations** - All sensitive data processed without decryption
- **Zero-Knowledge Proofs** - Cryptographic verification without data exposure
- **Secure Multi-Party Computation** - Collaborative processing with privacy

### Smart Contract Security
- **Access Control** - Role-based permissions and authorization
- **Encrypted Storage** - All sensitive data stored encrypted
- **Secure Key Management** - Advanced cryptographic key handling

## 🌐 Deployment

### Vercel Deployment

1. **Connect Repository**
   - Link your GitHub repository to Vercel
   - Configure build settings (automatically detected)

2. **Environment Variables**
   - Add all required environment variables in Vercel dashboard
   - Ensure all variables are prefixed with `VITE_` for client access

3. **Deploy**
   - Vercel will automatically build and deploy
   - Monitor build logs for any issues

### Manual Deployment

```bash
# Build the application
npm run build

# Preview the build
npm run preview

# Deploy to your preferred platform
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation as needed
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check our comprehensive guides
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join community discussions
- **Security**: Report security issues privately

## 🔮 Roadmap

- [ ] Multi-chain support
- [ ] Advanced FHE operations
- [ ] AI-powered risk assessment
- [ ] Mobile application
- [ ] Enterprise features

---

**Built with ❤️ for the maritime industry**

*Sea Lock Market - Where Privacy Meets Protection*