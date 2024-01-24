import React, { ReactNode, useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";

// General Functions

function splitPathname(pathname: string) {
    if (pathname === "/") {
        return { page: "home", subpage: "", item: "" };
    }

    const parts = pathname.split("/").filter(Boolean); // filter(Boolean) removes any empty strings from the array

    const page = parts[0] || "";
    const subpage = parts[1] || "";
    const item = parts[2] || "";

    return { page, subpage, item };
}

// General Types

type CartItem = {
    id: string;
    quantity: number;
};

// Define the shape of the context
interface GlobalContextProps {
    isCookiesAccepted: boolean;
    setIsCookiesAccepted: (value: boolean) => void;
    isCookiesOpen: boolean;
    setCookiesOpen: (value: boolean) => void;

    activePage: string;
    setActivePage: (value: string) => void;

    activeSubpage: string;
    setActiveSubpage: (value: string) => void;

    activeItem: string;
    setActiveItem: (value: string) => void;

    isMenuOpen: boolean;
    setMenuOpen: (value: boolean) => void;

    isSearchOpen: boolean;
    setSearchOpen: (value: boolean) => void;

    isCartOpen: boolean;
    setCartOpen: (value: boolean) => void;

    cartItems: CartItem[];
    setCartItems: (value: CartItem[]) => void;

    contentViewerMode: "standard" | "media" | "text";
    setContentViewerMode: (value: "standard" | "media" | "text") => void;

    colorMode: "light" | "dark";
    setColorMode: (value: "light" | "dark") => void;
}

// Create the context
const GlobalContext = React.createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

// Create a context provider component
const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const router = useRouter();

    const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);
    const [isCookiesOpen, setCookiesOpen] = useState(false);

    const [activePage, setActivePage] = useState("");
    const [activeSubpage, setActiveSubpage] = useState("");
    const [activeItem, setActiveItem] = useState("");

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const [contentViewerMode, setContentViewerMode] = useState<"standard" | "media" | "text">("standard");

    const [colorMode, setColorMode] = useState<"light" | "dark">("light");

    useEffect(() => {
        const { page, subpage, item } = splitPathname(router.pathname);
        setActivePage(page);
        setActiveSubpage(subpage);
        setActiveItem(item);

        console.log("activePage: " + page);
        console.log("activeSubpage: " + subpage);
        console.log("activeItem: " + item);
    }, [router.pathname]);

    return (
        <GlobalContext.Provider
            value={{
                isCookiesAccepted,
                setIsCookiesAccepted,
                isCookiesOpen,
                setCookiesOpen,
                activePage,
                setActivePage,
                activeSubpage,
                setActiveSubpage,
                activeItem,
                setActiveItem,
                isMenuOpen,
                setMenuOpen,
                isSearchOpen,
                setSearchOpen,
                isCartOpen,
                setCartOpen,
                cartItems,
                setCartItems,
                contentViewerMode,
                setContentViewerMode,
                colorMode,
                setColorMode,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
