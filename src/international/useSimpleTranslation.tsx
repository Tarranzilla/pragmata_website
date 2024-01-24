import { useRouter } from "next/router";
import { WebStructure } from "@/types/WebStructure";
import { englishWebStructure, portugueseWebStructure } from "@/types/WebStructure";

export function useSimpleTranslation(): WebStructure {
    const router = useRouter();
    const { locale } = router;

    let t = englishWebStructure; // Default to English if locale is undefined
    if (locale === "pt-BR") {
        t = portugueseWebStructure;
    }

    return t;
}
