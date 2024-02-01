import Cart_Icon from "../icons/Cart_Icon";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartOpen, closeMenu } from "@/store/slices/interfaceSlice";
import { RootState } from "@/store/store";

export default function CartSwitch() {
    const dispatch = useDispatch();
    const tSimple = useSimpleTranslation();
    const isCartOpen = useSelector((state: RootState) => state.interface.isCartOpen);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleCartAction = () => {
        dispatch(toggleCartOpen());
        dispatch(closeMenu());
    };
    return (
        <button className={isCartOpen ? "Nav_Button CartButton Active" : "Nav_Button CartButton"} onClick={toggleCartAction}>
            <Cart_Icon />
            {totalItems > 0 && <div className="CartTotalItems">{totalItems}</div>}
            <p className="DesktopOnly ButtonLabel">{tSimple.menu.languageBtnText}</p>
        </button>
    );
}
