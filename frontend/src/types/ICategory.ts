export interface ICategory {
  id: string;
  categoryName: string;
  description: string;
  typeId: number;
  chapterId: number;
  categoryChapter?: {
    chapterName: string;
    chapterDescription: string;
  };
  categoryType?: {
    name: string;
  };
  createdAt: Date;
}
