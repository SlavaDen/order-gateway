import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "enums/api";
import { IConfirmationContactDataState } from "types/confirmationContact";
import { confirmationContactOrder } from "./confirmationContact-actions";

const initialState: IConfirmationContactDataState = {
  typeConfirm: "sms",
  loading: REQUEST_STATUS.fulfilled,
  error: null,
  isConfirm: false
};

const confirmationContactSlice = createSlice({
  name: "confirmationContact",
  initialState: initialState,
  reducers: {
    setTypeConfirm: (state, action) =>{
      state.typeConfirm = action.payload;
    },
  }, 
  extraReducers: (builder) =>{
    builder
    .addCase(confirmationContactOrder.fulfilled, (state) => {
      state.isConfirm = true;
      state.loading = REQUEST_STATUS.fulfilled
    })
    .addCase(confirmationContactOrder.pending, (state) => {
      state.loading = REQUEST_STATUS.pending;
    })
    .addCase(confirmationContactOrder.rejected, (state, action) => {
      state.loading = REQUEST_STATUS.rejected;
      if (action.payload) {
        state.error = action.payload.message
      } else {
        state.error = "Unknown error"
      }
    })
  }
})

export default confirmationContactSlice.reducer;
export const { setTypeConfirm } = confirmationContactSlice.actions;