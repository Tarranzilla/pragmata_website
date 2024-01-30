import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "@/store/store";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import Header from "@/components/main/01_Header";
import Navbar from "@/components/main/03_Navbar";
import Menu from "@/components/main/04_Menu";
import ShoppingBag from "@/components/main/06_ShoppingBag";
import ReduxManager from "@/components/main/05_ReduxManager";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Provider store={store}>
                <ReduxManager />
                <Header />

                <Menu />

                <div className="ContentViewer_Wrapper">
                    <AnimatePresence mode="wait">
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </div>

                <ShoppingBag />
                <Navbar />
            </Provider>
        </>
    );
}
