export default interface INutritionalAdvice {
  id?: string;
  title: string;
  description?: string;
  categoryId: string;
  season?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}