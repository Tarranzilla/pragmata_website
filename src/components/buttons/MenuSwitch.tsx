import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { toggleMenuOpen, setCartOpen } from "@/store/slices/interfaceSlice";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store/store";

import Menu_Icon from "../icons/Menu_Icon";

export default function MenuSwitch() {
    const tSimple = useSimpleTranslation();
    const isMenuOpen = useSelector((state: RootState) => state.interface.isMenuOpen);
    const dispatch = useDispatch();

    const toggleMenuAction = () => {
        dispatch(toggleMenuOpen());
        dispatch(setCartOpen(false));
    };
    return (
        <button onClick={toggleMenuAction} className={isMenuOpen ? "Nav_Button Menu_Button Active" : "Menu_Button Nav_Button"}>
            <p className="DesktopOnly ButtonLabel">{tSimple.footer.menuBtnText}</p>
            <Menu_Icon />
        </button>
    );
}
