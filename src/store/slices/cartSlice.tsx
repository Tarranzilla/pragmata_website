import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
    id: string;
    name: string;
    price: number;
};

type Products = {
    [key: string]: Product;
};

const products: Products = {
    product1: { id: "product1", name: "Product 1", price: 100 },
    product2: { id: "product2", name: "Product 2", price: 200 },
    product3: { id: "product3", name: "Product 3", price: 300 },
    product4: { id: "product4", name: "Product 4", price: 400 },
};

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
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
                // Get the product details from the products object
                const product = products[cartItemId];
                if (product) {
                    state.cartItems.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
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
