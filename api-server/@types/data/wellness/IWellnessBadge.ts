
// Définition des interfaces
export default interface IWellnessBadge {
  id?: string
  name: string;
  description: string;
  categoryId: string;
  image: string;
  level: number;
}

// id               String            @id @default(cuid())
// name             String            @db.Text
// description      String?
// categoryId       String?           @map("category_id")
// image            String?           @db.Text
// level            Int
// createdAt        DateTime          @default(now()) @map("created_at") @db.Timestamp(6)
// updatedAt        DateTime?         @map("updated_at") @db.Timestamp(6)
// wellnessCategory wellnessCategory? @relation(fields: [categoryId], references: [id])
