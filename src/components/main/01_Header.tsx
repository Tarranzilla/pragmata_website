import { useTranslation, CommonTranslations } from "@/international/useTranslation";
import { motion as m, AnimatePresence } from "framer-motion";

import { useEffect } from "react";

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store/store";
import { setActivePage, setActiveSubpage, setActiveItem, toggleColorMode } from "@/store/slices/interfaceSlice";

type PageTranslations = {
    none: string;
    langSwitch: string;
    colorSwitch: string;
    shareBtn: string;
    menuBtn: string;
    closeMenuBtn: string;
    prevPage: string;
    nextPage: string;
    page1: string;
    page2: string;
    page3: string;
    page4: string;
    // Add more properties here as needed
    pageTitle: string;
    sharePageTitle: string;
};

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();

    const currentPage = useSelector((state: RootState) => state.interface.activePage);

    const tPage = useTranslation<PageTranslations>(currentPage);
    const tCommon = useTranslation<CommonTranslations>("common");

    const toggleColorModeAction = () => {
        dispatch(toggleColorMode());
        document.body.classList.toggle("dark-mode");
    };

    const share = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Pragmatas",
                    text: tCommon.sharePageTitle,
                    url: window.location.href,
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        } else {
            console.log("Web Share API is not supported in your browser.");
        }
    };

    return (
        <div className="Header">
            <button onClick={toggleColorModeAction}>{tCommon.colorSwitch}</button>

            <div className="Header_Center">
                <AnimatePresence mode="wait">
                    <m.h2
                        className="HeaderPageTitle"
                        key={tPage.pageTitle}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                    >
                        {tPage.pageTitle}
                    </m.h2>
                </AnimatePresence>
            </div>

            <button onClick={share}>{tCommon.shareBtn}</button>
        </div>
    );
}
