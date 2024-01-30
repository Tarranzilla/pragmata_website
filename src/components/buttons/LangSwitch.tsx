import { useRouter } from "next/router";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import Language_Icon from "../icons/Language_Icon";

export default function LangSwitch() {
    const router = useRouter();
    const tSimple = useSimpleTranslation();

    const changeLanguage = () => {
        const currentPath = router.asPath; // Get the current path
        const currentLocale = router.locale; // Get the current locale

        // Determine the new locale
        const newLocale = currentLocale === "en" ? "pt-BR" : "en";

        // Navigate to the same route but with the new locale
        router.push(currentPath, currentPath, { locale: newLocale });
    };

    return (
        <button className="Nav_Button" onClick={changeLanguage}>
            <Language_Icon />
            <p className="DesktopOnly ButtonLabel">{tSimple.menu.languageBtnText}</p>
        </button>
    );
}
