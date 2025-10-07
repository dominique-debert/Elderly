
export interface IMenuStore {
  openMenuId: string | null;
  openMenu: (id: string) => void;
  closeMenu: () => void;
}
