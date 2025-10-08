export interface IServiceRating {
  id?: string;
  serviceId: string;
  userId: string;
  rating: number;
  comment?: string;
  ratingDate?: Date;
}

// id           String       @id @default(cuid())
// serviceId    String       @map("service_id")
// userId       String       @map("user_id")
// rating       Int
// comment      String?
// ratingDate   DateTime?    @map("rating_date") @db.Timestamp(6)
