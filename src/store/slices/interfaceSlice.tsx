import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Função para dividir o pathname em partes
export function pathNameHelper(pathname: string) {
    console.log("pathname: " + pathname);

    const parts = pathname.split("/").filter(Boolean); // filter(Boolean) removes any empty strings from the array

    let page = "";

    if (pathname === "/") {
        page = "home";
    } else {
        page = parts[0] || "";
    }

    console.log("page: " + page);

    const subpage = parts[1] || "";
    console.log("subpage: " + subpage);
    const item = parts[2] || "";
    console.log("item: " + item);

    const pageLink = "/" + page;
    console.log("pageLink: " + pageLink);

    const subpageLink = pageLink + "/" + subpage;
    console.log("subpageLink: " + subpageLink);

    const itemLink = subpageLink + "/" + item;
    console.log("itemLink: " + itemLink);

    const generatePageTranslationKey = (page: string) => {
        switch (page) {
            case "home":
                return "home";
            case "who":
                return "who";
            case "what":
                return "what";
            case "how":
                return "how";
            case "projects":
                return "projects";
            case "shop":
                return "shop";
            case "contact":
                return "contact";
            case "404":
                return "err404";
            case "500":
                return "err500";
            default:
                return "common";
        }
    };

    const pageTranslationKey = generatePageTranslationKey(page);
    console.log("pageTranslationKey: " + pageTranslationKey);

    return { page, pageLink, subpage, subpageLink, item, itemLink, pageTranslationKey };
}

// Tipo para a Lógica da Interface
type InterfaceState = {
    activePage: string;
    activeSubpage: string;
    activeItem: string;
    isCookiesOpen: boolean;
    isMenuOpen: boolean;
    isSearchOpen: boolean;
    isCartOpen: boolean;
    contentViewerMode: "standard" | "media" | "text";
    colorMode: "light" | "dark";
    activePageTranslationKey: string;
};

// Estado inicial da interface
const initialState: InterfaceState = {
    activePage: "home",
    activeSubpage: "",
    activeItem: "",
    isCookiesOpen: false,
    isMenuOpen: false,
    isSearchOpen: false,
    isCartOpen: false,
    contentViewerMode: "standard",
    colorMode: "light",
    activePageTranslationKey: "home",
};

// Define o slice da interface
const InterfaceSlice = createSlice({
    name: "interface",
    initialState,
    reducers: {
        setActivePage: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        },
        setActiveSubpage: (state, action: PayloadAction<string>) => {
            state.activeSubpage = action.payload;
        },
        setActiveItem: (state, action: PayloadAction<string>) => {
            state.activeItem = action.payload;
        },
        setContentViewerMode: (state, action: PayloadAction<"standard" | "media" | "text">) => {
            state.contentViewerMode = action.payload;
        },
        toggleColorMode: (state) => {
            state.colorMode = state.colorMode === "light" ? "dark" : "light";
        },
        toggleCookiesOpen: (state) => {
            state.isCookiesOpen = !state.isCookiesOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        toggleMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        toggleSearchOpen: (state) => {
            state.isSearchOpen = !state.isSearchOpen;
        },
        toggleCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        setActivePageTranslationKey: (state, action: PayloadAction<string>) => {
            state.activePageTranslationKey = action.payload;
        },
    },
});

export const {
    setActivePage,
    setActiveSubpage,
    setActiveItem,
    toggleCookiesOpen,
    closeMenu,
    toggleMenuOpen,
    toggleSearchOpen,
    toggleCartOpen,
    setContentViewerMode,
    toggleColorMode,
    setActivePageTranslationKey,
} = InterfaceSlice.actions;

export default InterfaceSlice.reducer;
