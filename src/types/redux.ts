
import { IOrderState } from './order';
import { IConfirmationContactDataState } from './confirmationContact';

export type TState = {
  confirmationContact: IConfirmationContactDataState;
  order: IOrderState;
};