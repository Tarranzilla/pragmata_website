import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "@/store/store";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { setActivePage, setActiveSubpage, setActiveItem, setActivePageTranslationKey } from "@/store/slices/interfaceSlice";
import { pathNameHelper } from "@/store/slices/interfaceSlice";

import Header from "@/components/main/01_Header";
import Navbar from "@/components/main/03_Navbar";
import Menu from "@/components/main/04_Menu";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const { page, pageLink, subpage, subpageLink, item, itemLink, pageTranslationKey } = pathNameHelper(router.pathname);
        setActivePage(page);
        setActiveSubpage(subpage);
        setActiveItem(item);
        setActivePageTranslationKey(pageTranslationKey);
    }, [router.pathname]);

    return (
        <>
            <Provider store={store}>
                <Header />

                <Menu />

                <div className="ContentViewer_Wrapper">
                    <AnimatePresence mode="wait">
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </div>

                <Navbar />
            </Provider>
        </>
    );
}
