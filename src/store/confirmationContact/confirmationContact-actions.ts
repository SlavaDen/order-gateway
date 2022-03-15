import { createAsyncThunk } from "@reduxjs/toolkit";

const confirmationContactOrder = createAsyncThunk(
  "confirmationContact/confirmationContactOrder",
  async (payload, {rejectWithValue, dispatch, extra: api}) => {
    try{
      const {   
        typeConfirm,
        value
      } = payload;

      const response = await api.confirmationContactOrder({   
          typeConfirm,
          value
      });

      return response.data;
    } catch(error) {
      if(error.response){
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error);
    }
  }
);

export {confirmationContactOrder}