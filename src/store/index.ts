import { configureStore } from "@reduxjs/toolkit"
import * as api from "api/";
import confirmationContactReducer from './confirmationContact/confirmationContact-reducer';
import orderReducer from './order/order-reducer';

const store = configureStore({
  reducer:{
    confirmationContact: confirmationContactReducer,
    order: orderReducer
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
    thunk:{
      extraArgument:api
    }
  })
})

export default store