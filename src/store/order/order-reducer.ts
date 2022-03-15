import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "enums/api";
import { IOrderState } from "types/order";
import { checkOrder } from 'store/order/order-actions';

const initialState: IOrderState = {
  loading: "",
  error: null,
  isOrder: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    setIsOrder(state, action){
      state.isOrder = action.payload
    }
  }, 
  extraReducers: (builder) =>{
    builder
    .addCase(checkOrder.fulfilled, (state) => {
      state.isOrder = true;
      state.loading = REQUEST_STATUS.fulfilled;
    })
    .addCase(checkOrder.pending, (state) => {
      state.loading = REQUEST_STATUS.pending;
    })
    .addCase(checkOrder.rejected, (state, action) => {
      state.loading = REQUEST_STATUS.rejected;
      state.error = action.payload;
    })
  }
})

export default orderSlice.reducer;
export const {setIsOrder} = orderSlice.actions;