import LangSwitch from "@/components/buttons/LangSwitch";
import MenuSwitch from "../buttons/MenuSwitch";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { motion as m, AnimatePresence } from "framer-motion";

import Link from "next/link";

import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { closeMenu, setActivePage, toggleIsSubpageActive } from "@/store/slices/interfaceSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.interface.activePage);
    const currentSubpage = useSelector((state: RootState) => state.interface.activeSubpage);

    const tSimple = useSimpleTranslation();
    const translatedPage = tSimple.pages.find((page) => page.translationKey === currentPage);

    const translatedSubpage =
        translatedPage?.products?.find((product) => product.translationKey === currentSubpage) ||
        translatedPage?.projects?.find((project) => project.translationKey === currentSubpage);

    const navIndicator = translatedSubpage ? translatedSubpage.name : translatedPage ? translatedPage.name : "";

    const [exitDirection, setExitDirection] = useState(0);
    const [enterDirection, setEnterDirection] = useState(0);
    const [lastDirection, setLastDirection] = useState(0);

    const [exitDirectionUpdated, setExitDirectionUpdated] = useState(false);
    const [enterDirectionUpdated, setEnterDirectionUpdated] = useState(false);

    const [isSubpage, setIsSubpage] = useState(false);

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

    useEffect(() => {
        setIsSubpage(!!translatedSubpage);
        if (!!translatedSubpage) {
            dispatch(toggleIsSubpageActive(true));
        }
        return () => {
            dispatch(toggleIsSubpageActive(false));
        };
    }, [translatedSubpage]);

    return (
        <div className="Navbar">
            <div className="Navbar_Left">
                {/* Previous Page Button */}
                {!isSubpage && (
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
                )}

                {/* Back to Page Button */}
                {isSubpage && (
                    <Link href={`${translatedPage?.path}`} className={"Nav_Button"}>
                        {tSimple.footer.contextBtnText} {translatedPage?.name}
                    </Link>
                )}

                {/* Language Switch */}
                <LangSwitch />
            </div>
            <div className="Navbar_Center">
                {/* Page Name Indicator */}
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

                {/* Brand Name */}
                <h1 className="BrandName">pragmatas</h1>
            </div>
            <div className="Navbar_Right">
                {/* Next Page Button */}
                {!isSubpage && (
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
                )}

                {/* Menu Switch */}
                <MenuSwitch />
            </div>
        </div>
    );
}
