import Link from "next/link";

import LangSwitch from "@/components/buttons/LangSwitch";
import { useTranslation } from "@/international/useTranslation";

type NavbarProps = {
    currentRoute: string;
    closeMenu?: () => void;
    toggleMenu?: () => void;
};

const pages: { [key: string]: string } = {
    "/": "home",
    "/who": "who",
    "/what": "what",
    "/how": "how",
    "/projects": "projects",
    "/shop": "shop",
    "/contact": "contact",
};

function getPrevAndNextPages(currentPage: string) {
    const pageKeys = Object.keys(pages);
    const currentIndex = pageKeys.indexOf(currentPage);
    const prevPage = currentIndex === 0 ? pageKeys[pageKeys.length - 1] : pageKeys[currentIndex - 1];
    const nextPage = currentIndex === pageKeys.length - 1 ? pageKeys[0] : pageKeys[currentIndex + 1];
    return { prevPage, nextPage };
}

export default function Navbar({ currentRoute, toggleMenu, closeMenu }: NavbarProps) {
    const { t: tCommon } = useTranslation("common");
    const { t: tPage } = useTranslation(pages[currentRoute]);

    const { prevPage, nextPage } = getPrevAndNextPages(currentRoute);

    return (
        <div className="Navbar">
            <div className="Navbar_Left">
                <Link onClick={closeMenu} className={"Nav_Button"} href={prevPage}>
                    {tCommon["prevPage"]}
                </Link>
                <LangSwitch />
            </div>
            <div className="Navbar_Center">
                <h2>{tPage["pageName"]}</h2>
                <h1>Pragmatas</h1>
            </div>
            <div className="Navbar_Right">
                <Link onClick={closeMenu} className={"Nav_Button"} href={nextPage}>
                    {tCommon["nextPage"]}
                </Link>
                <button onClick={toggleMenu} className={"Nav_Button"}>
                    {tCommon["menuBtn"]}
                </button>
            </div>
        </div>
    );
}
