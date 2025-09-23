export type CategoryTypeParams = { categoryTypeId: string };
export type CategoryIdParams = { id: string };
export type CategoryTypeWithIdParams = { categoryTypeId: string; id: string };

export interface ICategory {
  id: number;
  nom: string;
  description?: string;
  type_categorie_id: number;
  chapitre_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateCategoryDTO {
  nom: string;
  description?: string;
  chapitre_id: number;
}

export interface IUpdateCategoryDTO {
  nom?: string;
  description?: string;
  chapitre_id?: number;
}
