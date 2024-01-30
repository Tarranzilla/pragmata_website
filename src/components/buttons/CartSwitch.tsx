import Cart_Icon from "../icons/Cart_Icon";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function CartSwitch() {
    const tSimple = useSimpleTranslation();
    return (
        <button className="Nav_Button">
            <Cart_Icon />
            <p className="DesktopOnly ButtonLabel">{tSimple.menu.languageBtnText}</p>
        </button>
    );
}
