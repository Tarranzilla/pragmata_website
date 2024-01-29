import { toggleColorMode } from "@/store/slices/interfaceSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function ThemeSwitch() {
    const tSimple = useSimpleTranslation();
    const dispatch = useDispatch();

    const toggleColorModeAction = () => {
        dispatch(toggleColorMode());
        document.body.classList.toggle("dark-mode");
    };

    return <button onClick={toggleColorModeAction}>{tSimple.navbar.colorModeBtnText}</button>;
}
