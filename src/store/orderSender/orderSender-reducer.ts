import { createSlice } from "@reduxjs/toolkit";

const name = `orderGateway`;

const initialState = {
  typeSend: "sms"
};

const orderGatewaySlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setTypeSend: (state, action) =>{
      state.typeSend = action.payload;
    }
  }
})

export default orderGatewaySlice.reducer;
export const {setTypeSend} = orderGatewaySlice.actions;