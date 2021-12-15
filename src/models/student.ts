export interface Student {
  id?: number;
  name: string;
  age: number;
  gender: 'male' | 'female';
  city: string;

  createdAt?: number;
  updatedAt?: number;
}
