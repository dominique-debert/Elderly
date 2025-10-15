export interface ICategory {
  id: number;
  categoryName: string;
  description: string;
  typeId: number;
  chapterId: number;
  categoryChapter?: {
    id: number;
    chapterName: string;
    chapterDescription: string;
  };
  categoryType?: {
    id: number;
    name: string;
  };
  createdAt: Date;
}
