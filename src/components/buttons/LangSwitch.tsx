import { useRouter } from "next/router";
import { useTranslation } from "@/international/useTranslation";

export default function LangSwitch() {
    const router = useRouter();
    const { t } = useTranslation("common");

    const changeLanguage = () => {
        const currentPath = router.asPath; // Get the current path
        const currentLocale = router.locale; // Get the current locale

        // Determine the new locale
        const newLocale = currentLocale === "en" ? "pt-BR" : "en";

        // Navigate to the same route but with the new locale
        router.push(currentPath, currentPath, { locale: newLocale });
    };

    return <button onClick={changeLanguage}>{t.langSwitch}</button>;
}
