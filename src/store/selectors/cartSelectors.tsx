/*

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import RoupaFloar from "@/types/RoupaFloar";
import { CartItem } from "../slices/cartSlice";

export const selectCartItemQuantity = createSelector(
    (state: RootState) => state.cart.cart.products, // Select the cart products from the state
    (state: RootState, roupaFloar: RoupaFloar) => roupaFloar,
    (products: CartItem[], roupaFloar: RoupaFloar) => {
        const item = products.find((product) => product.sys.id === roupaFloar.sys.id);
        return item ? item.quantity : 0;
    }
);

*/
