// English Imports
import commonEn from "./locales/en/00_common.json";
import homeEn from "./locales/en/01_home.json";
import whoEn from "./locales/en/02_who.json";
import whatEn from "./locales/en/03_what.json";
import howEn from "./locales/en/04_how.json";
import projectsEn from "./locales/en/05_projects.json";
import projectsListEn from "./locales/en/05b_projects_list.json";
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
import projectsListPtBR from "./locales/pt-BR/05b_projects_list.json";
import shopPtBR from "./locales/pt-BR/06_shop.json";
import contactPtBR from "./locales/pt-BR/07_contact.json";
import ptBR404 from "./locales/pt-BR/08_404.json";
import ptBR500 from "./locales/pt-BR/09_500.json";

import { useRouter } from "next/router";

export type CommonTranslations = typeof commonEn;

export type HomeTranslations = typeof homeEn;
export type WhoTranslations = typeof whoEn;

export type CategoryTranslations = {
    title: string;
    subitems: string[];
};

export type WhatTranslations = {
    pageName: string;
    pageTitle: string;
    pageDescription: string;
    categories: CategoryTranslations[];
};

export type HowTranslations = typeof howEn;
export type ProjectsTranslations = typeof projectsEn;
export type ShopTranslations = typeof shopEn;
export type ContactTranslations = typeof contactEn;
export type ErrorTranslations = typeof en404 | typeof en500;

export type ProjectListObject = {
    title: string;
    subtitle: string;
    description: string;
};

export type ProjectListTranslations = {
    projects: ProjectListObject[];
    // Add more properties here as needed
};

export type PageTranslations =
    | CommonTranslations
    | HomeTranslations
    | WhoTranslations
    | WhatTranslations
    | HowTranslations
    | ProjectsTranslations
    | ShopTranslations
    | ContactTranslations
    | ErrorTranslations
    | ProjectListTranslations;

export type Namespace = string;
type TranslationKeys = "en" | "pt-BR";

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
        projList: projectsListEn,
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
        projList: projectsListPtBR,
    },
};

export function useTranslation<T = Record<string, unknown>>(namespace: string): T {
    const router = useRouter();
    const { locale } = router;

    let t = translations["en"][namespace]; // Default to English if locale is undefined
    if (locale && translations[locale as TranslationKeys]) {
        t = translations[locale as TranslationKeys][namespace];
    }

    return t as T;
}
