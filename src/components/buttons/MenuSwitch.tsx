import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { toggleMenuOpen } from "@/store/slices/interfaceSlice";
import { useSelector, useDispatch } from "react-redux";

export default function MenuSwitch() {
    const tSimple = useSimpleTranslation();
    const dispatch = useDispatch();

    const toggleMenuAction = () => {
        dispatch(toggleMenuOpen());
    };
    return (
        <button onClick={toggleMenuAction} className={"Nav_Button"}>
            {tSimple.footer.menuBtnText}
        </button>
    );
}
