// English Imports
import commonEn from "./locales/en/00_common.json";
import homeEn from "./locales/en/01_home.json";
import whoEn from "./locales/en/02_who.json";
import whatEn from "./locales/en/03_what.json";
import howEn from "./locales/en/04_how.json";
import projectsEn from "./locales/en/05_projects.json";
import shopEn from "./locales/en/06_shop.json";
import contactEn from "./locales/en/07_contact.json";
import en404 from "./locales/en/08_404.json";
import en500 from "./locales/en/09_500.json";

// Portuguese Imports
import commonPtBR from "./locales/pt-BR/00_common.json";
import homePtBR from "./locales/pt-BR/01_home.json";
import whoPtBR from "./locales/pt-BR/02_who.json";
import whatPtBR from "./locales/pt-BR/03_what.json";
import howPtBR from "./locales/pt-BR/04_how.json";
import projectsPtBR from "./locales/pt-BR/05_projects.json";
import shopPtBR from "./locales/pt-BR/06_shop.json";
import contactPtBR from "./locales/pt-BR/07_contact.json";
import ptBR404 from "./locales/pt-BR/08_404.json";
import ptBR500 from "./locales/pt-BR/09_500.json";

import { useRouter } from "next/router";

type CommonTranslations = typeof commonEn;

type HomeTranslations = typeof homeEn;
type WhoTranslations = typeof whoEn;
type WhatTranslations = typeof whatEn;
type HowTranslations = typeof howEn;
type ProjectsTranslations = typeof projectsEn;
type ShopTranslations = typeof shopEn;
type ContactTranslations = typeof contactEn;
type ErrorTranslations = typeof en404 | typeof en500;

type PageTranslations =
    | CommonTranslations
    | HomeTranslations
    | WhoTranslations
    | WhatTranslations
    | HowTranslations
    | ProjectsTranslations
    | ShopTranslations
    | ContactTranslations
    | ErrorTranslations;

export type Namespace = string;
type TranslationKeys = "en" | "pt-BR";
type Translations = Record<string, string>;

const translations: Record<TranslationKeys, Record<string, PageTranslations>> = {
    en: {
        common: commonEn,
        home: homeEn,
        who: whoEn,
        what: whatEn,
        how: howEn,
        projects: projectsEn,
        shop: shopEn,
        contact: contactEn,
        err404: en404,
        err500: en500,
    },
    "pt-BR": {
        common: commonPtBR,
        home: homePtBR,
        who: whoPtBR,
        what: whatPtBR,
        how: howPtBR,
        projects: projectsPtBR,
        shop: shopPtBR,
        contact: contactPtBR,
        err404: ptBR404,
        err500: ptBR500,
    },
};

export function useTranslation(namespace: Namespace) {
    const router = useRouter();
    const { locale } = router;

    let t = translations["en"][namespace]; // Default to English if locale is undefined
    if (locale && translations[locale as TranslationKeys]) {
        t = translations[locale as TranslationKeys][namespace];
    }

    return { t: t as Translations };
}
