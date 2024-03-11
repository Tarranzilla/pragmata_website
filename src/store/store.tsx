import { configureStore } from "@reduxjs/toolkit";

import cookiesSlice from "./slices/cookiesSlice";
import interfaceSlice from "./slices/interfaceSlice";
import cartSlice from "./slices/cartSlice";

import mercadoPagoSlice from "./slices/mercadoPagoSlice";

export const store = configureStore({
    reducer: {
        cookies: cookiesSlice,
        interface: interfaceSlice,
        cart: cartSlice,
        mercadoPago: mercadoPagoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
