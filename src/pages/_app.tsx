import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect, createContext, useContext } from "react";

import { AnimatePresence, color } from "framer-motion";
import { useRouter } from "next/router";

import Header from "@/components/main/01_Header";
import Navbar from "@/components/main/03_Navbar";
import Menu from "@/components/main/04_Menu";

export const ColorModeContext = createContext<{
    colorMode: "light" | "dark";
    setColorMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}>({
    colorMode: "light",
    setColorMode: () => {},
});

export function useColorMode() {
    return useContext(ColorModeContext);
}

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const route = router.route;
    const routeWithoutLeadingSlash = router.route.slice(1);

    const [colorMode, setColorMode] = useState<"light" | "dark">("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (colorMode === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [colorMode]);

    return (
        <>
            <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
                <Header currentRoute={routeWithoutLeadingSlash} />

                <AnimatePresence mode="wait">{isMenuOpen && <Menu closeMenu={closeMenu} />}</AnimatePresence>

                <div className="ContentViewer_Wrapper">
                    <AnimatePresence mode="wait">
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </div>

                <Navbar currentRoute={route} isMenuOpen={isMenuOpen} closeMenu={closeMenu} toggleMenu={toggleMenu} />
            </ColorModeContext.Provider>
        </>
    );
}
