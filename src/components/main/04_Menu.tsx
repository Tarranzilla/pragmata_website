import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

import { useTranslation, CommonTranslations } from "@/international/useTranslation";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMenuOpen } from "@/store/slices/interfaceSlice";

export default function Menu() {
    const dispatch = useDispatch();
    const tCommon = useTranslation<CommonTranslations>("common");

    const isMenuOpen = useSelector((state: RootState) => state.interface.isMenuOpen);

    const toggleMenuAction = () => {
        dispatch(toggleMenuOpen());
    };

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <m.div
                    initial={{ opacity: 0, y: "100vh" }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    className="Menu"
                >
                    <div className="PageList">
                        <Link className="MenuLink" onClick={toggleMenuAction} href="/">
                            {tCommon.page1}
                        </Link>
                        <Link className="MenuLink" onClick={toggleMenuAction} href="/who">
                            {tCommon.page2}
                        </Link>
                        <Link className="MenuLink" onClick={toggleMenuAction} href="/what">
                            {tCommon.page3}
                        </Link>
                        <Link className="MenuLink" onClick={toggleMenuAction} href="/how">
                            {tCommon.page4}
                        </Link>
                        <Link className="MenuLink" onClick={toggleMenuAction} href="/projects">
                            {tCommon.page5}
                        </Link>
                        <Link className="MenuLink" onClick={toggleMenuAction} href="/shop">
                            {tCommon.page6}
                        </Link>
                        <Link className="MenuLink" onClick={toggleMenuAction} href="/contact">
                            {tCommon.page7}
                        </Link>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
}
