import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "enums/api";
import { IOrderState } from "types/order";
import { checkOrder } from 'store/order/order-actions';

const name = "order";

const initialState: IOrderState = {
  loading: "",
  error: null,
  isOrder: false,
};

const orderSlice = createSlice({
  name: `${name}`,
  initialState: initialState,
  reducers: {
    setIsOrder(state, action){
      state.isOrder = action.payload
    }
  }, 
  extraReducers: (builder) =>{
    builder
    .addCase(checkOrder.fulfilled, (state) => {
      state.loading = REQUEST_STATUS.fulfilled;
      state.isOrder = true;
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

export default orderSlice.reducer;
export const {setIsOrder} = orderSlice.actions;