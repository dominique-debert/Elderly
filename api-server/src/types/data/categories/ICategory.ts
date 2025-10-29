export interface ICategory {
  id: number;
  nom: string;
  description?: string;
  type_categorie_id: number;
  chapitre_id: number;
  created_at: Date;
  updated_at: Date;
}
