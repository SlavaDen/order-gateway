import { TState } from "types/redux";

const selectTypeSend = (state: TState)=> state.orderSender.typeSend;

const selectOrderStatus = (state: TState)=> {
  return {
    loading: state.orderSender.loading,
   error: state.orderSender.error,
  }
};

export {selectTypeSend, selectOrderStatus};