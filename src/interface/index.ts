export interface User {
  id: string;
  gender: string;
  profile?: Profile | null;
  experiences: Experience[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Profile {
  id: string;
  name: string;
  dateOfBirth: Date;
  personality: string;
  bio: string;
  images: string[]; // Array of image URLs or paths
  userId: string;   // Foreign key to User
}

export interface Experience {
  id: string;
  budget: number;
  partner?: string | null; // Optional
  options: Record<string, any>; // Flexible JSON for options
  tableLayoutChosen: Record<string, any>; // Flexible JSON for table layout
  timeChosen: Date;
  outcome: string;
  rating: number; // Float value for rating
  userId: string; // Foreign key to User
}

export interface Place {
  id: string;
  name: string;
  location: string;
  menu: Menu[];
  tableLayout: Record<string, any>; // JSON for table layout
  timings: string; // Store timing as string or convert to specific type
  createdAt: Date;
  updatedAt: Date;
}

export interface Menu {
  id: string;
  optionName: string;
  optionPrice: number;
  optionImages: string[]; // Array of image URLs or paths
  placeId: string;        // Foreign key to Place
}
