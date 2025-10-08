export default interface INutritionalAdvice {
  id?: string;
  title: string;
  description?: string;
  categoryId: number;
  season?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}