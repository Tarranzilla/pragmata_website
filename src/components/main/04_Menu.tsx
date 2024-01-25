import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMenuOpen } from "@/store/slices/interfaceSlice";

export default function Menu() {
    const dispatch = useDispatch();
    const tSimple = useSimpleTranslation();

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
                        {tSimple.menu.menuLinks?.map((link) => (
                            <Link className="MenuLink" onClick={toggleMenuAction} href={link.path} key={link.name}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
}
