import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";

import { useTranslation, HomeTranslations } from "@/international/useTranslation";
import LangSwitch from "@/components/buttons/LangSwitch";

import { useColorMode } from "@/pages/_app";

export default function Home() {
    const t = useTranslation<HomeTranslations>("home");

    const { colorMode } = useColorMode();

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
