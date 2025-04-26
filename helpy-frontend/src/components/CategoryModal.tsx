import { useState, useEffect } from 'react';
import ICategory from '../@types/ICategory';

interface CategoryModalProps {
  category?: ICategory | null;
  onSave: (data: { name: string; description?: string }) => void;
  onClose: () => void;
}

const CategoryModal = ({ category, onSave, onClose }: CategoryModalProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description || '');
    } else {
      setName('');
      setDescription('');
    }
  }, [category]);

  const handleSubmit = () => {
    onSave({ name, description });
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{category ? 'Modifier' : 'Ajouter'} une catégorie</h3>
        <div className="form-control mt-4">
          <label className="label">Nom</label>
          <input className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-control mt-4">
          <label className="label">Description</label>
          <textarea className="textarea textarea-bordered" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Annuler</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Enregistrer</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
