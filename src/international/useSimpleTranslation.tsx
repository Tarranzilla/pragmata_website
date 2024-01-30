import { useRouter } from "next/router";
import { WebStructure } from "@/types/WebStructure";
import { englishWebStructure, portugueseWebStructure } from "@/types/WebStructure";
import { useDispatch, useSelector } from "react-redux";
import { setActiveLanguage } from "@/store/slices/interfaceSlice";
import { useMemo } from "react";

export function useSimpleTranslation(): WebStructure {
    const dispatch = useDispatch();
    const router = useRouter();
    const { locale } = router;

    const t = useMemo(() => {
        let temp = englishWebStructure; // Default to English if locale is undefined
        if (locale === "pt-BR" || locale === "pt") {
            temp = portugueseWebStructure;
            dispatch(setActiveLanguage("pt-BR"));
            console.log("pt-BR");
        } else {
            dispatch(setActiveLanguage("en"));
            console.log("en");
        }
        return temp;
    }, [locale, dispatch]);

    return t;
}
