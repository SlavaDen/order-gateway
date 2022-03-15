import { TState } from "types/redux";

const selectStatusOrder = (state: TState)=> {
  return {
    loading: state.order.loading,
    error: state.order.error,
    isOrder: state.order.isOrder,
  }
};

export {selectStatusOrder};