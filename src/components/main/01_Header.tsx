import { useTranslation, CommonTranslations } from "@/international/useTranslation";

import { motion as m, AnimatePresence } from "framer-motion";

import { useColorMode } from "@/pages/_app";

type HeaderProps = {
    currentRoute: string;
};

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

export default function Header({ currentRoute }: HeaderProps) {
    // If currentRoute is '/', change it to 'home'
    let pageNamespace;
    if (currentRoute === "") {
        pageNamespace = "home";
    } else if (currentRoute === "404") {
        pageNamespace = "err404";
    } else if (currentRoute === "500") {
        pageNamespace = "err500";
    } else {
        pageNamespace = currentRoute;
    }

    const tPage = useTranslation<PageTranslations>(pageNamespace);
    const tCommon = useTranslation<CommonTranslations>("common");

    const { colorMode, setColorMode } = useColorMode();

    const toggleColorMode = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
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
            <button onClick={toggleColorMode}>{tCommon.colorSwitch}</button>

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
