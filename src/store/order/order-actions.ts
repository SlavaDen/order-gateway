import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAppDispatch } from "store/";
import { setIsOrder } from "store/order/order-reducer";
import { IOrderState, TOrderAttributes } from "types/order";
import { TApiFunctions, TApiError } from 'types/api';

const checkOrder = createAsyncThunk
<
IOrderState,
TOrderAttributes,
  {
    dispatch: TAppDispatch
    extra: TApiFunctions
    rejectValue: TApiError
  }
>
(
  "order/checkOrder",
  async function (payload, {rejectWithValue, dispatch, extra: api}){
    try{
      await new Promise(resolve => setTimeout(resolve, 1000));

      const {orderGuid} = payload;
      
      const response = await api.checkOrder(orderGuid);

      if(!response.data.result){
        dispatch(setIsOrder(false));
        return rejectWithValue({message:"Order not found"} as TApiError);
      }

      return response.data;
    } catch(error) {
      return rejectWithValue((await error) as TApiError)
    }
  }
);

export {checkOrder}