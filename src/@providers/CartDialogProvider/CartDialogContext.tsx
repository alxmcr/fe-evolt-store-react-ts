import React from 'react';
import { CartDialogActions } from '../../@types/providerTypes';

const initialCartDialogActions: CartDialogActions = {
  openDialog: () => {},
  closeDialog: () => {},
};

export const CartDialogRefContext = React.createContext<React.RefObject<HTMLDialogElement> | null>(null);

export const CartDialogActionsContext = React.createContext<CartDialogActions>(initialCartDialogActions);
