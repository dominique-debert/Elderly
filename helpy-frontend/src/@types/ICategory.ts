export interface ICategory {
  id?: string;
  categoryName: string;
  typeId: number;
  chapterId: number;
  categoryChapter?: {
    chapterName: string;
    chapterDescription: string;
  };
  categoryType?: {
    name: string;
  };
}