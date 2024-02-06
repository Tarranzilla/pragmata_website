import { motion as m, AnimatePresence } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store/store";

import ShareBtn from "../buttons/ShareBtn";
import ThemeSwitch from "../buttons/ThemeSwitch";

import { findProductByTranslationKeyWebStruc } from "@/types/WebStructure";

export default function Header() {
    const currentPage = useSelector((state: RootState) => state.interface.activePage);
    const currentSubpage = useSelector((state: RootState) => state.interface.activeSubpage);
    const currentItem = useSelector((state: RootState) => state.interface.activeItem);

    const isSubpageActive = useSelector((state: RootState) => state.interface.isSubpageActive);

    const isMenuOpen = useSelector((state: RootState) => state.interface.isMenuOpen);
    const isCartOpen = useSelector((state: RootState) => state.interface.isCartOpen);

    const tSimple = useSimpleTranslation();

    const translatedPage = tSimple.pages.find((page) => page.translationKey === currentPage);

    console.log(translatedPage);

    const translatedSubpage =
        translatedPage?.products?.find((product) => product.translationKey === currentSubpage) ||
        translatedPage?.projects?.find((project) => project.translationKey === currentSubpage);

    if (translatedSubpage) {
        console.log(translatedSubpage);
    }

    const translatedItem = findProductByTranslationKeyWebStruc(currentItem, tSimple);

    if (translatedItem) {
        console.log(translatedItem);
    }

    return (
        <div className="Header">
            {/* Color Mode Button */}
            <ThemeSwitch />

            {/* Page Title */}
            <div className="Header_Center">
                <AnimatePresence mode="wait">
                    {translatedSubpage && !translatedItem && !isMenuOpen && !isCartOpen && (
                        <m.h2
                            className="HeaderPageTitle"
                            key={translatedPage?.translationKey}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                        >
                            {translatedSubpage?.name}
                        </m.h2>
                    )}

                    {translatedItem && !isMenuOpen && !isCartOpen && (
                        <m.h2
                            className="HeaderPageTitle"
                            key={"bag-header"}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                        >
                            {translatedItem?.name}
                        </m.h2>
                    )}
                </AnimatePresence>
            </div>

            {/* Share Button */}
            <ShareBtn />
        </div>
    );
}
