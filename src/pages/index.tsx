import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";

import { useTranslation, HomeTranslations } from "@/international/useTranslation";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import LangSwitch from "@/components/buttons/LangSwitch";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Home() {
    const t = useTranslation<HomeTranslations>("home");

    const tSimple = useSimpleTranslation();

    tSimple.pages[0].paragraphs?.map((paragraph) => {
        console.log(paragraph);
    });

    tSimple.pages[4].projects?.map((project) => {
        console.log(project);
    });

    tSimple.pages[5].products?.map((product) => {
        console.log(product);
    });

    const colorMode = useSelector((state: RootState) => state.interface.colorMode);

    return (
        <>
            <Head>
                <title>Pragmatas</title>
                <meta name="description" content="Arte e Design com Sentido" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={"ContentViewer"}>
                <Image
                    src="/imgs/pragmatas_black.png"
                    width={500}
                    height={500}
                    alt="pragmatas"
                    className={`Image ${colorMode === "dark" ? "InvertedImage" : ""}`}
                />
                <p>{t.description1}</p>
                <p>{t.description2}</p>
                <p>{t.description3}</p>
                <Image
                    src="/imgs/noite_estrelada_black.png"
                    width={500}
                    height={500}
                    alt="pragmatas"
                    className={`Image ${colorMode === "dark" ? "InvertedImage" : ""}`}
                />
                <p>{t.description4}</p>
                <p>{t.description5}</p>
                <p>{t.description6}</p>
                <p>{t.description7}</p>
                <p>{t.description8}</p>
                <Image
                    src="/imgs/padrao_01_black.png"
                    width={500}
                    height={500}
                    alt="pragmatas"
                    className={`Image ${colorMode === "dark" ? "InvertedImage" : ""}`}
                />
            </m.main>
        </>
    );
}
