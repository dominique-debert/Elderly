import { EValence } from "@/@types";

export interface IMood {
  id: number;
  name: string;
  description?: string;
  valence: EValence;
  intensity: number;
  color: string;
  createdAt: Date;
}
