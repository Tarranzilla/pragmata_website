import LangSwitch from "@/components/buttons/LangSwitch";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { motion as m, AnimatePresence } from "framer-motion";

import Link from "next/link";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { closeMenu, toggleMenuOpen, setActivePage } from "@/store/slices/interfaceSlice";

const pages = [
    {
        name: "home",
        path: "/",
        translation: "home",
        subpages: null,
    },
    {
        name: "who",
        path: "/who",
        translation: "who",
        subpages: null,
    },
    {
        name: "what",
        path: "/what",
        translation: "what",
        subpages: null,
    },
    {
        name: "how",
        path: "/how",
        translation: "how",
        subpages: null,
    },
    {
        name: "projects",
        path: "/projects",
        translation: "projects",
        subpages: [
            {
                name: "product-design",
                path: "/projects/product-design",
                translation: "product-design",
                items: [],
            },
            {
                name: "graphic-design",
                path: "/projects/graphic-design",
                translation: "graphic-design",
                items: [],
            },
            {
                name: "web-app",
                path: "/projects/web-app",
                translation: "web-app",
                items: [],
            },
        ],
    },
    {
        name: "shop",
        path: "/shop",
        translation: "shop",
        subpages: [
            {
                name: "all",
                path: "/shop/all",
                translation: "all",
                items: [],
            },
            {
                name: "artifacts",
                path: "/shop/artifacts",
                translation: "artifacts",
                items: [],
            },
            {
                name: "photography",
                path: "/shop/photography",
                translation: "photography",
                items: [],
            },
            {
                name: "clothing",
                path: "/shop/clothing",
                translation: "clothing",
                items: [],
            },
        ],
    },
    {
        name: "contact",
        path: "/contact",
        translation: "contact",
        subpages: null,
    },
    {
        name: "404",
        path: "/404",
        translation: "err404",
        subpages: null,
    },
    {
        name: "500",
        path: "/500",
        translation: "err500",
        subpages: null,
    },
];

function getPrevAndNextPages(currentPage: string) {
    // Filter out the pages you don't want to include
    const filteredPages = pages.filter((page) => page.name !== "404" && page.name !== "500");

    // Find the index of the current page
    const currentIndex = filteredPages.findIndex((page) => page.name === currentPage);

    // Get the previous and next pages
    const prevPage = currentIndex > 0 ? filteredPages[currentIndex - 1] : filteredPages[filteredPages.length - 1];
    const nextPage = currentIndex < filteredPages.length - 1 ? filteredPages[currentIndex + 1] : filteredPages[0];

    return { prevPage, nextPage, filteredPages };
}

export default function Navbar() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.interface.activePage);
    const isMenuOpen = useSelector((state: RootState) => state.interface.isMenuOpen);

    const tSimple = useSimpleTranslation();

    const [exitDirection, setExitDirection] = useState(0);
    const [enterDirection, setEnterDirection] = useState(0);

    const { prevPage, nextPage, filteredPages } = getPrevAndNextPages(currentPage);

    const toggleMenuAction = () => {
        dispatch(toggleMenuOpen());
    };

    const closeMenuAction = () => {
        dispatch(closeMenu());
    };

    const setActivePageAction = (page: string) => {
        dispatch(setActivePage(page));
    };

    return (
        <div className="Navbar">
            <div className="Navbar_Left">
                <Link
                    onClick={() => {
                        closeMenuAction();
                        setExitDirection(0); // Set direction to left for previous page
                        setActivePageAction(prevPage.name);
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
                        initial={{ opacity: 0, x: enterDirection === 0 ? 100 : -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: exitDirection === 0 ? -100 : 100 }}
                        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                        className="PageName"
                    >
                        {currentPage}
                    </m.h2>
                </AnimatePresence>

                {currentPage !== "/404" && currentPage !== "/500" && (
                    <div className="NavigationIndicator">
                        {filteredPages.map((page, index) => (
                            <div key={index} className={`NavigationCircle ${currentPage === page.name ? "Active" : ""}`} />
                        ))}
                    </div>
                )}

                <h1 className="BrandName">pragmatas</h1>
            </div>
            <div className="Navbar_Right">
                <Link
                    onClick={() => {
                        closeMenuAction();
                        setExitDirection(1); // Set direction to right for next page
                        setActivePageAction(nextPage.name);
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
