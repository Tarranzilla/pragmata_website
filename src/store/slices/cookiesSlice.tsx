import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CookieState = {
    isCookiesAccepted: boolean;
    allowedCookies: string[];
};

const initialState: CookieState = {
    isCookiesAccepted: false,
    allowedCookies: [],
};

const cookiesSlice = createSlice({
    name: "cookies",
    initialState,
    reducers: {
        setCookiesAccepted: (state, action: PayloadAction<boolean>) => {
            state.isCookiesAccepted = action.payload;
        },
        setAllowedCookies: (state, action: PayloadAction<string[]>) => {
            state.allowedCookies = action.payload;
        },
    },
});

export const { setCookiesAccepted, setAllowedCookies } = cookiesSlice.actions;
export default cookiesSlice.reducer;
