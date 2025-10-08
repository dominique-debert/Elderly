enum EValence {
  positive = "positive",
  negative = "negative",
  neutre = "neutre",
}

export interface IMood {
  name: string;
  description?: string;
  valence: EValence;
  intensity: number;
  color: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// model mood {
//   id              Int               @id @default(autoincrement())
//   name            String            @unique @default("")
//   description     String?
//   valence         Valence
//   intensity       Int               @default(0) // Échelle de 1 à 5
//   color           String            @default("") // Couleur associée (hex)
//   createdAt       DateTime          @default(now())
//   updatedAt       DateTime          @updatedAt
//   healthIndicator healthIndicator[]
// }
