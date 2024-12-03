export interface SocialMedia {
    socialNetwork: string;
    profileLink: string;
    domainId: number;
  }
  
  export interface SubDomain {
    domainId: number;
    name: string;
    registrationDate: Date;
  }
  
  export interface TextRecord {
    nameValue: string;
    link: string;
    domainId: number;
  }
  
  export interface Transaction {
    publicKey: string;
    slot: bigint;
    walletId: number;
    domainId?: number;
    submittedAt: Date;
    transactionType: number;
    error?: string | null;
    confirmed: boolean;
  }
  
  export interface User {
    fullName: string;
    walletId: number;
    domainId: number;
    email?: string | null;
    bio?: string | null;
    avatar?: string | null;
  }
  
  export interface Wallet {
    publicKey: string;
    balance: string;  // Decimal value is usually stored as a string
    userId: number;
  }
  