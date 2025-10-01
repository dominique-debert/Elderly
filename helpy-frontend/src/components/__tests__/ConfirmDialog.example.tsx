import { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog';
import { Button } from '@/components/ui/button';

/**
 * Example usage of the migrated ConfirmDialog component
 * This demonstrates the new API with controlled open state
 */
const ConfirmDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    console.log('Item deleted');
    setIsOpen(false);
  };

  const handleCancel = () => {
    console.log('Action cancelled');
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>
        Delete Item
      </Button>
      
      <ConfirmDialog
        open={isOpen}
        message="Êtes-vous sûr de vouloir supprimer cet élément ? Cette action ne peut pas être annulée."
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ConfirmDialogExample;