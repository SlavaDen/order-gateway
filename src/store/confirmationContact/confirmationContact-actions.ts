import { createAsyncThunk } from "@reduxjs/toolkit";
import { TAppDispatch } from "store/";
import { TApiError, TApiFunctions } from "types/api";
import { IConfirmationContactDataState, TConfirmationContactAttributes } from "types/confirmationContact";

const confirmationContactOrder = createAsyncThunk
<
IConfirmationContactDataState,
TConfirmationContactAttributes,
  {
    dispatch: TAppDispatch
    extra: TApiFunctions
    rejectValue: TApiError
  }
>
(
  "confirmationContact/confirmationContactOrder",
  async (payload, {rejectWithValue, extra: api}) => {
    try{
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const {   
        orderGuid,
        value
      } = payload;

      const response = await api.confirmationContactOrder(orderGuid, value);

      return response.data;
    } catch(error) {
      return rejectWithValue((await error) as TApiError)
    }
  }
);

export {confirmationContactOrder}