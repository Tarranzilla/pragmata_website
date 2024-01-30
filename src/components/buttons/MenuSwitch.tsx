import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { toggleMenuOpen } from "@/store/slices/interfaceSlice";
import { useSelector, useDispatch } from "react-redux";

import Menu_Icon from "../icons/Menu_Icon";

export default function MenuSwitch() {
    const tSimple = useSimpleTranslation();
    const dispatch = useDispatch();

    const toggleMenuAction = () => {
        dispatch(toggleMenuOpen());
    };
    return (
        <button onClick={toggleMenuAction} className={"Nav_Button"}>
            <p className="DesktopOnly ButtonLabel">{tSimple.footer.menuBtnText}</p>
            <Menu_Icon />
        </button>
    );
}
