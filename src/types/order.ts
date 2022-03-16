
export interface IOrderState {
  loading: string,
  error: string | null,
  isOrder: boolean
};

export type TOrderAttributes = {
  orderGuid: string;
};