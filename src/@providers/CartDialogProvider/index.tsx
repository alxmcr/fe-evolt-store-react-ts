import React from 'react';
import { CartDialogActionsContext, CartDialogRefContext } from './CartDialogContext';

type Props = {
  children: React.ReactNode;
};

export default function CartDialogProvider({ children }: Props) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <CartDialogRefContext.Provider value={dialogRef}>
      <CartDialogActionsContext.Provider value={{ openDialog, closeDialog }}>
        {children}
      </CartDialogActionsContext.Provider>
    </CartDialogRefContext.Provider>
  );
}
