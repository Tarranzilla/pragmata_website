import { toggleColorMode } from "@/store/slices/interfaceSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import Theme_Icon from "../icons/Theme_Icon";

export default function ThemeSwitch() {
    const tSimple = useSimpleTranslation();
    const dispatch = useDispatch();

    const toggleColorModeAction = () => {
        dispatch(toggleColorMode());
        document.body.classList.toggle("dark-mode");
    };

    return (
        <button className="HeaderButton ThemeSwitch" onClick={toggleColorModeAction}>
            <Theme_Icon />
            <p className="DesktopOnly ButtonLabel">{tSimple.navbar.colorModeBtnText}</p>
        </button>
    );
}
