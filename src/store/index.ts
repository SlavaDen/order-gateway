import { configureStore } from "@reduxjs/toolkit"
import * as api from "api/";
import orderSenderReducer from './orderSender/orderSender-reducer';

const store = configureStore({
  reducer:{
    orderSender: orderSenderReducer
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    thunk:{
      extraArgument:api
    }
  })
})

export default store