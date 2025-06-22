# Decentralized KYC (Know Your Customer) System

A blockchain-based decentralized web application that revolutionizes the KYC verification process using Ethereum smart contracts, providing secure, transparent, and efficient identity verification for banks and their customers.

## 🌟 Features

### For Users/Customers

- **Secure Registration**: Register on the platform with personal information
- **Document Upload**: Upload KYC documents (passport, citizenship front/back) with RSA encryption
- **Request Verification**: Submit KYC verification requests to banks
- **Grant Access**: Control which banks can access your verified KYC information
- **Track Status**: Monitor KYC verification status in real-time
- **Multi-Bank Management**: Manage relationships with multiple banks from one platform

### For Banks

- **Bank Registration**: Register institutional accounts with license information
- **Client Management**: View and manage all bank clients
- **KYC Verification**: Verify or reject customer KYC submissions
- **Access Requests**: Request access to customers' verified KYC data
- **Secure Data Access**: Access encrypted customer information with proper permissions
- **Dashboard Analytics**: Comprehensive dashboard for managing clients and requests

### For Administrators

- **Bank Verification**: Verify and approve bank registrations
- **Platform Oversight**: Monitor overall platform activity
- **User Management**: Oversee user and bank registrations

## 🏗️ Technical Architecture

### Smart Contract (Solidity)

- **Contract**: `DecentralizedKYC1.sol`
- **Blockchain**: Ethereum (compatible with local Ganache and testnets)
- **Features**:
  - User and bank registration
  - KYC status management (NOT_UPLOADED, UPLOADED, REQUESTED, VERIFIED, REJECTED)
  - RSA cryptography for secure data handling
  - Access control with role-based permissions
  - Bank-client relationship management

### Frontend (React.js)

- **Framework**: React 17+ with Material-UI components
- **Wallet Integration**: MetaMask support via ethers.js
- **Storage**: IPFS integration for document storage
- **Features**:
  - Responsive web design
  - Multi-role interfaces (User, Bank, Admin)
  - Real-time blockchain interaction
  - Document upload and encryption
  - Modern UI/UX with Material Design

### Key Technologies

- **Blockchain**: Ethereum, Solidity 0.8.19
- **Frontend**: React, Material-UI, ethers.js
- **Storage**: IPFS, Web3.Storage
- **Development**: Hardhat, Ganache
- **Cryptography**: RSA encryption for sensitive data
- **Testing**: Hardhat testing framework

## 📋 Prerequisites

- **Node.js**: Version 16.x (Required)
- **MetaMask**: Browser extension for wallet connection
- **Ganache**: Local Ethereum blockchain (for development)
- **Git**: For version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone [repository-url]
cd decentralized-kyc
```

### 2. Smart Contract Setup

```bash
cd smart_contract
npm install

# Deploy to local Ganache
npm run deploy ganache

# Alternative Hardhat commands
npx hardhat compile
npx hardhat test
npx hardhat node
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install

# Update contract details in utils/constants.js
# Set the deployed contract address and ensure ABI is updated

npm start
```

### 4. Configuration

1. **Start Ganache**: Run local Ethereum blockchain
2. **Deploy Contract**: Use the deploy script to deploy the smart contract
3. **Update Constants**: Update `frontend/src/utils/constants.js` with:
   - Contract address from deployment
   - Ensure ABI is current
4. **Connect MetaMask**: Import Ganache accounts to MetaMask
5. **Access Application**: Open `http://localhost:3000`

## 🔧 Development Workflow

### Smart Contract Development

```bash
cd smart_contract

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to local network
npx hardhat run scripts/deploy.js --network localhost

# Deploy to specific network
npm run deploy [network-name]
```

### Frontend Development

```bash
cd frontend

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📱 User Flows

### Customer Journey

1. **Connect Wallet** → MetaMask integration
2. **Register Account** → Provide personal information
3. **Upload KYC Documents** → Passport, citizenship documents
4. **Request Verification** → Submit to chosen bank
5. **Track Status** → Monitor verification progress
6. **Grant Access** → Allow banks to access verified data

### Bank Journey

1. **Connect Wallet** → MetaMask integration
2. **Register Bank** → Provide institutional details
3. **Admin Verification** → Wait for admin approval
4. **Manage Clients** → View and verify customer KYC
5. **Access Requests** → Request access to customer data
6. **Verification Process** → Approve or reject KYC submissions

### Admin Journey

1. **Connect Wallet** → Admin wallet connection
2. **Bank Approval** → Verify and approve bank registrations
3. **Platform Monitoring** → Oversee system activity
4. **User Management** → Monitor user activities

## 🔐 Security Features

- **RSA Encryption**: Customer data encrypted with RSA cryptography
- **Blockchain Immutability**: Tamper-proof record keeping
- **Access Control**: Role-based permissions (User, Bank, Admin)
- **Decentralized Storage**: IPFS for secure document storage
- **Smart Contract Security**: Solidity best practices implemented
- **Wallet Integration**: Secure MetaMask authentication

## 🗂️ Project Structure

```
decentralized-kyc/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── admin/       # Admin interface
│   │   │   ├── bank/        # Bank interface
│   │   │   ├── user/        # User interface
│   │   │   └── LandingPage/ # Landing page
│   │   ├── context/         # React context (blockchain integration)
│   │   ├── utils/           # Utilities and constants
│   │   └── theme/           # UI theme configuration
│   └── public/              # Static assets
├── smart_contract/          # Ethereum smart contracts
│   ├── contracts/           # Solidity contracts
│   ├── scripts/             # Deployment scripts
│   ├── test/                # Contract tests
│   └── hardhat.config.js    # Hardhat configuration
└── docs/                    # Documentation and diagrams
```

## 🧪 Testing

### Smart Contract Tests

```bash
cd smart_contract
npx hardhat test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## 🌐 Deployment

### Local Development

1. Start Ganache or Hardhat node
2. Deploy contracts locally
3. Start frontend development server

### Testnet Deployment

1. Configure network in `hardhat.config.js`
2. Deploy to testnet: `npm run deploy [network]`
3. Update frontend constants with new contract address
4. Deploy frontend to hosting service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**MetaMask Connection Issues**

- Ensure MetaMask is installed and unlocked
- Check network configuration (should match your deployment)
- Verify account has sufficient ETH for gas fees

**Smart Contract Deployment Issues**

- Verify Ganache is running on correct port
- Check hardhat.config.js network settings
- Ensure sufficient ETH in deployment account

**Frontend Connection Issues**

- Verify contract address in constants.js
- Check ABI is current after contract updates
- Ensure IPFS connection is properly configured

### Support

For issues and questions:

1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Include error messages and environment details

## 🚀 Future Enhancements

- **Multi-chain Support**: Support for other blockchains (Polygon, BSC)
- **Mobile Application**: React Native mobile app
- **Advanced Analytics**: Enhanced reporting and analytics
- **Document Templates**: Standardized KYC document templates
- **API Integration**: RESTful API for third-party integrations
- **Compliance Features**: Enhanced regulatory compliance tools

---

**Note**: This project is for educational and demonstration purposes. For production use, ensure proper security audits and compliance with local regulations.
