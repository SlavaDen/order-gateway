import { createSlice } from "@reduxjs/toolkit";

const name = `orderGateway`;

const initialState = {
  typeSend: "sms",
  loading: true,
  error: null,
};

const orderGatewaySlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    setTypeSend: (state, action) =>{
      state.typeSend = action.payload;
    },
    setLoading: (state,action) =>{
      state.loading = action.payload;
    }
  }
})

export default orderGatewaySlice.reducer;
export const { setTypeSend, setLoading } = orderGatewaySlice.actions;