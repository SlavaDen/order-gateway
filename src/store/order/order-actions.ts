import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsOrder } from "store/order/order-reducer";

const checkOrder = createAsyncThunk(
  "order/checkOrder",
  async (payload, {rejectWithValue, dispatch, extra: api}) => {
    try{
      const {orderGuid} = payload;

      const response = await api.checkOrder({orderGuid});

      if(!response.data.result){
        dispatch(setIsOrder(false));
        return rejectWithValue("Order not found");
      }

      return response.data;
    } catch(error) {
      if(error.response){
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error);
    }
  }
);

export {checkOrder}