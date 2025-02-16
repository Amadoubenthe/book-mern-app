// export interface Book {
//   _id: number;
//   title: string;
//   description: string;
//   category: string;
//   trending: boolean;
//   coverImage: string;
//   oldPrice: number;
//   newPrice: number;
// }

export interface Book {
  _id: string;
  title: string;
  description: string;
  category: string;
  trending: boolean;
  coverImage: string;
  oldPrice: number;
  newPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
