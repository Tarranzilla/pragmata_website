import LangSwitch from "@/components/buttons/LangSwitch";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { motion as m, AnimatePresence } from "framer-motion";

import Link from "next/link";

import { useEffect } from "react";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { closeMenu, toggleMenuOpen, setActivePage } from "@/store/slices/interfaceSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.interface.activePage);
    const currentSubpage = useSelector((state: RootState) => state.interface.activeSubpage);
    const isMenuOpen = useSelector((state: RootState) => state.interface.isMenuOpen);

    const tSimple = useSimpleTranslation();
    const translatedPage = tSimple.pages.find((page) => page.translationKey === currentPage);

    const translatedSubpage =
        translatedPage?.products?.find((product) => product.translationKey === currentSubpage) ||
        translatedPage?.projects?.find((project) => project.translationKey === currentSubpage);

    const navIndicator = translatedSubpage ? translatedSubpage.name : translatedPage ? translatedPage.name : "";

    const [exitDirection, setExitDirection] = useState(0);
    const [enterDirection, setEnterDirection] = useState(0);
    const [lastDirection, setLastDirection] = useState(0);

    const getPrevAndNextPages = (currentPage: string) => {
        // Filter out the pages you don't want to include
        const filteredPages = tSimple.pages.filter((page) => page.translationKey !== "404" && page.translationKey !== "500");

        // Find the index of the current page
        const currentIndex = filteredPages.findIndex((page) => page.translationKey === currentPage);

        // Get the previous and next pages
        const prevPage = currentIndex > 0 ? filteredPages[currentIndex - 1] : filteredPages[filteredPages.length - 1];
        const nextPage = currentIndex < filteredPages.length - 1 ? filteredPages[currentIndex + 1] : filteredPages[0];

        return { prevPage, nextPage, filteredPages };
    };

    const { prevPage, nextPage, filteredPages } = getPrevAndNextPages(currentPage);

    // Add these state variables to track if the exit and enter directions have been updated
    const [exitDirectionUpdated, setExitDirectionUpdated] = useState(false);
    const [enterDirectionUpdated, setEnterDirectionUpdated] = useState(false);

    const toggleMenuAction = () => {
        dispatch(toggleMenuOpen());
    };

    const closeMenuAction = () => {
        dispatch(closeMenu());
    };

    const setActivePageAction = (page: string) => {
        dispatch(setActivePage(page));
    };

    // Update the useEffect hook
    useEffect(() => {
        // If both the exit and enter directions have been updated, navigate to the new page
        if (exitDirectionUpdated && enterDirectionUpdated) {
            setActivePageAction(lastDirection === 0 ? prevPage.name : nextPage.name);
            // Reset the updated flags
            setExitDirectionUpdated(false);
            setEnterDirectionUpdated(false);
        }
    }, [exitDirectionUpdated, enterDirectionUpdated]);

    return (
        <div className="Navbar">
            <div className="Navbar_Left">
                <Link
                    onClick={() => {
                        closeMenuAction();
                        // Set the exit direction to the right
                        setExitDirection(1);
                        // Set the enter direction to the right
                        setEnterDirection(0);
                        // Update the last direction to indicate that we're navigating to the previous page
                        setLastDirection(0);
                        // Set the updated flags
                        setExitDirectionUpdated(true);
                        setEnterDirectionUpdated(true);
                    }}
                    className={"Nav_Button"}
                    href={prevPage.path}
                >
                    {tSimple.footer.prevPageBtnText}
                </Link>
                <LangSwitch />
            </div>
            <div className="Navbar_Center">
                <AnimatePresence mode="wait">
                    <m.h2
                        key={currentPage}
                        initial={{ opacity: 0, x: enterDirection === 0 ? -100 : 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: exitDirection === 0 ? -100 : 100 }}
                        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                        className="PageName"
                    >
                        {navIndicator}
                    </m.h2>
                </AnimatePresence>

                {/* Navigation Dot Indicator  */}
                {currentPage !== "/404" && currentPage !== "/500" && (
                    <div className="NavigationIndicator">
                        {filteredPages.map((page, index) => (
                            <div key={index} className={`NavigationCircle ${currentPage === page.translationKey ? "Active" : ""}`} />
                        ))}
                    </div>
                )}

                <h1 className="BrandName">pragmatas</h1>
            </div>
            <div className="Navbar_Right">
                <Link
                    onClick={() => {
                        closeMenuAction();
                        // Set the exit direction to the left
                        setExitDirection(0);
                        // Set the enter direction to the left
                        setEnterDirection(1);
                        // Update the last direction to indicate that we're navigating to the next page
                        setLastDirection(1);
                        // Set the updated flags
                        setExitDirectionUpdated(true);
                        setEnterDirectionUpdated(true);
                    }}
                    className={"Nav_Button"}
                    href={nextPage.path}
                >
                    {tSimple.footer.nextPageBtnText}
                </Link>
                <button onClick={toggleMenuAction} className={"Nav_Button"}>
                    {tSimple.footer.menuBtnText}
                </button>
            </div>
        </div>
    );
}
