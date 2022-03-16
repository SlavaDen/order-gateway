import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  extraReducers: (builder: ActionReducerMapBuilder<IOrderState>) =>{
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
      if (action.payload) {
        state.error = action.payload.message
      } else {
        state.error = "Unknown error"
      }
    })
  }
})

export default orderSlice.reducer;
export const {setIsOrder} = orderSlice.actions;