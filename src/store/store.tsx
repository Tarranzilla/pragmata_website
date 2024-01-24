import { configureStore } from "@reduxjs/toolkit";

import cookiesSlice from "./slices/cookiesSlice";
import interfaceSlice from "./slices/interfaceSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        cookies: cookiesSlice,
        interface: interfaceSlice,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
