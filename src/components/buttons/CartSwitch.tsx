import Cart_Icon from "../icons/Cart_Icon";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useDispatch } from "react-redux";
import { toggleCartOpen } from "@/store/slices/interfaceSlice";

export default function CartSwitch() {
    const dispatch = useDispatch();
    const tSimple = useSimpleTranslation();

    const toggleCartAction = () => {
        dispatch(toggleCartOpen());
    };
    return (
        <button className="Nav_Button" onClick={toggleCartAction}>
            <Cart_Icon />
            <p className="DesktopOnly ButtonLabel">{tSimple.menu.languageBtnText}</p>
        </button>
    );
}
