import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/types/WebStructure";
import { products } from "@/types/WebStructure";

export const findProductByTranslationKey = (translationKey: string, products: Product[]): Product | undefined => {
    for (const prod of products) {
        if (prod.subproducts) {
            for (const subproductGroup of prod.subproducts) {
                const product = subproductGroup.products.find((product) => product.translationKey === translationKey);
                if (product) return product;
            }
        }
    }
    return undefined;
};

type CartItem = {
    id: string;
    price: number;
    quantity: number;
    bannerImage?: string;
};

type CartState = {
    cartItems: CartItem[];
    cartTotal: number;
};

const initialState: CartState = {
    cartItems: [],
    cartTotal: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<string>) => {
            const cartItemId = action.payload;
            const existingCartItem = state.cartItems.find((item) => item.id === cartItemId);

            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                const product = findProductByTranslationKey(cartItemId, products);

                if (product) {
                    state.cartItems.push({ id: product.translationKey, price: product.price, quantity: 1, bannerImage: product.bannerImage });
                }
            }

            state.cartTotal = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        decrementCartItem: (state, action: PayloadAction<string>) => {
            const cartItemId = action.payload;
            const existingCartItem = state.cartItems.find((item) => item.id === cartItemId);

            if (existingCartItem) {
                existingCartItem.quantity -= 1;
                if (existingCartItem.quantity <= 0) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== cartItemId);
                }
            }

            state.cartTotal = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeCartItem: (state, action: PayloadAction<string>) => {
            const cartItemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== cartItemId);
            state.cartTotal = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
});

export const { addCartItem, decrementCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
