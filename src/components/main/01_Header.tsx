import { useTranslation } from "@/international/useTranslation";
import { Namespace } from "@/international/useTranslation";

import { motion as m, AnimatePresence } from "framer-motion";

type HeaderProps = {
    currentRoute: string;
    colorMode: "light" | "dark";
    setColorMode: (mode: "light" | "dark") => void;
};

export default function Header({ currentRoute, colorMode, setColorMode }: HeaderProps) {
    const { t: tCommon } = useTranslation("common");

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

    const { t: tPage } = useTranslation(pageNamespace);

    const toggleColorMode = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
    };

    const share = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Pragmatas",
                    text: "Check out this website!",
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
