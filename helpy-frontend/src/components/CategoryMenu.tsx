import { mdiPencil, mdiTrashCan } from '@mdi/js';
import Icon from '@mdi/react';
import { useOutsideClick } from '../hooks/useOutsideClick';  // Assure-toi que ce hook est bien importé
import { useCategoryMenuStore } from '../stores/categoryMenuStore';  // Import du store

const CategoryMenu = () => {
  const {
    isMenuOpen,
    selectedCategory,
    closeMenu,
    openUpdateModal,
    openDeleteModal,
    menuPosition,  // On récupère la position du menu
  } = useCategoryMenuStore();

  // Utilisation du hook pour détecter un clic en dehors du menu
  const menuRef = useOutsideClick(() => closeMenu());

  if (!isMenuOpen || !selectedCategory || !menuPosition) return null;

  return (
    <div
      ref={menuRef} // Associe le ref pour détecter les clics à l'extérieur
      className="absolute bg-white shadow-lg rounded-lg p-2 z-50 w-40 transition-opacity opacity-0 duration-300 ease-in-out transform"
      style={{
        left: `${menuPosition.left}px`,  // Position horizontale
        top: `${menuPosition.top}px`,   // Position verticale
        opacity: isMenuOpen ? 1 : 0,  // Pour animer l'opacité
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(10px)',  // Animation pour la translation
      }}
    >
      <button
        onClick={() => {
          closeMenu();
          openUpdateModal();
        }}
        className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
      >
        <Icon path={mdiPencil} size={0.8} className="mr-2" />
        Modifier
      </button>
      <button
        onClick={() => {
          closeMenu();
          openDeleteModal();
        }}
        className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-red-500"
      >
        <Icon path={mdiTrashCan} size={0.8} className="mr-2" />
        Supprimer
      </button>
    </div>
  );
};

export default CategoryMenu;
