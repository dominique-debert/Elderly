var EValence;
(function (EValence) {
    EValence["positive"] = "positive";
    EValence["negative"] = "negative";
    EValence["neutre"] = "neutre";
})(EValence || (EValence = {}));
export {};
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
