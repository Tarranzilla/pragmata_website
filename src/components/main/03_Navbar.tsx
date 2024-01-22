import Link from "next/link";

import LangSwitch from "@/components/buttons/LangSwitch";
import { useTranslation, CommonTranslations } from "@/international/useTranslation";

import { motion as m, AnimatePresence } from "framer-motion";

import { useState } from "react";

type NavbarProps = {
    currentRoute: string;
    isMenuOpen: boolean;
    closeMenu: () => void;
    toggleMenu: () => void;
};

type PageTranslations = {
    pageName: string;
};

const pages: { [key: string]: string } = {
    "/": "home",
    "/who": "who",
    "/what": "what",
    "/how": "how",
    "/projects": "projects",
    "/shop": "shop",
    "/contact": "contact",
    "/404": "err404",
    "/500": "err500",
};

function getPrevAndNextPages(currentPage: string) {
    if (currentPage === "/404" || currentPage === "/500") {
        // Return default values for prevPage and nextPage when on an error page
        return { prevPage: "/contact", nextPage: "/" };
    }
    const pageKeys = Object.keys(pages).filter((page) => page !== "/404" && page !== "/500");
    const currentIndex = pageKeys.indexOf(currentPage);
    const prevPage = currentIndex === 0 ? pageKeys[pageKeys.length - 1] : pageKeys[currentIndex - 1];
    const nextPage = currentIndex === pageKeys.length - 1 ? pageKeys[0] : pageKeys[currentIndex + 1];
    return { prevPage, nextPage };
}

export default function Navbar({ currentRoute, isMenuOpen, toggleMenu, closeMenu }: NavbarProps) {
    const tCommon = useTranslation<CommonTranslations>("common");
    const tPage = useTranslation<PageTranslations>(pages[currentRoute]);

    const pageKeys = Object.keys(pages).filter((page) => page !== "/404" && page !== "/500");
    const { prevPage, nextPage } = getPrevAndNextPages(currentRoute);

    const [direction, setDirection] = useState(0); // 0 for next, 1 for previous

    return (
        <div className="Navbar">
            <div className="Navbar_Left">
                <Link
                    onClick={() => {
                        closeMenu();
                        setDirection(1);
                    }}
                    className={"Nav_Button"}
                    href={prevPage}
                >
                    {tCommon["prevPage"]}
                </Link>
                <LangSwitch />
            </div>
            <div className="Navbar_Center">
                <AnimatePresence mode="wait">
                    <m.h2
                        key={tPage["pageName"]}
                        initial={{ opacity: 0, x: direction === 0 ? 100 : -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction === 0 ? -100 : 100 }}
                        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                        className="PageName"
                    >
                        {tPage["pageName"]}
                    </m.h2>
                </AnimatePresence>

                {currentRoute !== "/404" && currentRoute !== "/500" && (
                    <div className="NavigationIndicator">
                        {pageKeys.map((page, index) => (
                            <div key={index} className={`NavigationCircle ${currentRoute === page ? "Active" : ""}`} />
                        ))}
                    </div>
                )}

                <h1 className="BrandName">pragmatas</h1>
            </div>
            <div className="Navbar_Right">
                <Link
                    onClick={() => {
                        closeMenu();
                        setDirection(0);
                    }}
                    className={"Nav_Button"}
                    href={nextPage}
                >
                    {tCommon["nextPage"]}
                </Link>
                <button onClick={toggleMenu} className={"Nav_Button"}>
                    {tCommon[isMenuOpen ? "closeMenuBtn" : "menuBtn"]}
                </button>
            </div>
        </div>
    );
}
