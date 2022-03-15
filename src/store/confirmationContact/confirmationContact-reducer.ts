import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "enums/api";
import { confirmationContactOrder } from "./confirmationContact-actions";

const name = "confirmationContact";

const initialState = {
  typeConfirm: "sms",
  loading: REQUEST_STATUS.fulfilled,
  error: null,
  isConfirm: false
};

const confirmationContactSlice = createSlice({
  name: `${name}`,
  initialState: initialState,
  reducers: {
    setTypeConfirm: (state, action) =>{
      state.typeConfirm = action.payload;
    },
  }, 
  extraReducers: (builder) =>{
    builder
    .addCase(confirmationContactOrder.fulfilled, (state) => {
      state.loading = REQUEST_STATUS.fulfilled;
      state.isConfirm = true;
    })
    .addMatcher(
      (action)=>action.type.endsWith(`${name}/pending`),
      (state)=>{
        state.loading = REQUEST_STATUS.pending;
      }
    )
    .addMatcher(
      (action)=>action.type.endsWith(`${name}/rejected`),
      (state, action)=>{
        state.loading = REQUEST_STATUS.rejected;
        state.error = action.payload
      }
    )
  }
})

export default confirmationContactSlice.reducer;
export const { setTypeConfirm } = confirmationContactSlice.actions;