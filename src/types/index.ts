export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  available: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  membershipDate: string;
} 