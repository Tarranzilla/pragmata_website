import { motion as m, AnimatePresence } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store/store";

import ShareBtn from "../buttons/ShareBtn";
import ThemeSwitch from "../buttons/ThemeSwitch";

export default function Header() {
    const currentPage = useSelector((state: RootState) => state.interface.activePage);
    const isSubpageActive = useSelector((state: RootState) => state.interface.isSubpageActive);
    const tSimple = useSimpleTranslation();
    const translatedPage = tSimple.pages.find((page) => page.translationKey === currentPage);

    return (
        <div className="Header">
            {/* Color Mode Button */}
            <ThemeSwitch />

            {/* Page Title */}
            <div className="Header_Center">
                <AnimatePresence mode="popLayout">
                    {isSubpageActive && (
                        <m.h2
                            className="HeaderPageTitle"
                            key={translatedPage?.translationKey}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                        >
                            {translatedPage?.name}
                        </m.h2>
                    )}
                </AnimatePresence>
            </div>

            {/* Share Button */}
            <ShareBtn />
        </div>
    );
}
