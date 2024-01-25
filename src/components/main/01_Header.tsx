import { useTranslation, CommonTranslations } from "@/international/useTranslation";
import { motion as m, AnimatePresence } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store/store";
import { toggleColorMode } from "@/store/slices/interfaceSlice";

export default function Header() {
    const dispatch = useDispatch();

    const currentPage = useSelector((state: RootState) => state.interface.activePage);

    const tSimple = useSimpleTranslation();

    const toggleColorModeAction = () => {
        dispatch(toggleColorMode());
        document.body.classList.toggle("dark-mode");
    };

    const share = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Pragmatas",
                    text: tSimple.navbar.shareBtnLabel,
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
            <button onClick={toggleColorModeAction}>{tSimple.navbar.colorModeBtnText}</button>

            <div className="Header_Center">
                <AnimatePresence mode="wait">
                    <m.h2
                        className="HeaderPageTitle"
                        key={currentPage}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                    >
                        {currentPage}
                    </m.h2>
                </AnimatePresence>
            </div>

            <button onClick={share}>{tSimple.navbar.shareBtnText}</button>
        </div>
    );
}
