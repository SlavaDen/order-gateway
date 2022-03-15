import { TState } from "types/redux";

const selectTypeConfirm = (state: TState)=> state.confirmationContact.typeConfirm;
const selectLoading = (state: TState)=> {
  return state.confirmationContact.loading
};
const selectError = (state: TState)=> {
  return state.confirmationContact.error
};
const selectIsConfirm = (state: TState)=> {
  return state.confirmationContact.isConfirm
};


export {selectTypeConfirm, selectLoading, selectError, selectIsConfirm};