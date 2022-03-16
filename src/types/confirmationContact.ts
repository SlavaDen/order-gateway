
export interface IConfirmationContactDataState {
  typeConfirm: string,
  loading: string,
  error: string | null,
  isConfirm: boolean,
};

export type TConfirmationContactAttributes = {
  orderGuid: string;
  value: string;
};