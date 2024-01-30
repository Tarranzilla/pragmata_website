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
    const subpage = parts[1] || "";
    const item = parts[2] || "";

    const pageLink = "/" + page;
    const subpageLink = pageLink + "/" + subpage;
    const itemLink = subpageLink + "/" + item;

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

    return { page, pageLink, subpage, subpageLink, item, itemLink, pageTranslationKey };
}

// Tipo para a Lógica da Interface
type InterfaceState = {
    selectedLanguage: "none" | "en" | "pt-BR";
    activePage: string;
    isSubpageActive: boolean;
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
    selectedLanguage: "none", // "none" | "en" | "pt-BR
    activePage: "home",
    isSubpageActive: false,
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
        setActiveLanguage: (state, action: PayloadAction<"none" | "en" | "pt-BR">) => {
            state.selectedLanguage = action.payload;
        },
        setActivePage: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        },
        toggleIsSubpageActive: (state, action: PayloadAction<boolean>) => {
            state.isSubpageActive = action.payload;
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
    setActiveLanguage,
    setActivePage,
    toggleIsSubpageActive,
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
