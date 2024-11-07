export interface Category {
    id: number;
    title: string;
    description: string;
    createdAt: string; // or Date if you prefer to handle dates as Date objects
    updatedAt: string; // or Date if you prefer to handle dates as Date objects
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    roles: Array<string>; // Array of strings to accommodate multiple roles
    createdAt: string; // or Date
    updatedAt: string; // or Date
  }
  
  export interface Product {
    id: number;
    title: string;
    description: string;
    price: string; // or number if you want to handle it as a numeric value
    beforePrice: string; // or number if you want to handle it as a numeric value
    stock: number;
    share: string; // Adjust the type if necessary based on your use case
    images: Array<string>; // Array of image paths or URLs
    createdAt: string; // or Date
    updatedAt: string; // or Date
    category: Category; // Nested category object
    addedBy: User; // Nested addedBy object
  }

  export interface ProductCardProps extends Product {
    className?: string;
  }