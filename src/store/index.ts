import { configureStore } from "@reduxjs/toolkit"
import orderSenderReducer from './orderSender/orderSender-reducer';

const store = configureStore({
  reducer:{
    orderSender: orderSenderReducer
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
   
  })
})

export default store