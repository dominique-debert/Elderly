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
    id: string;
    name: string;
  };
  createdAt: Date;
}