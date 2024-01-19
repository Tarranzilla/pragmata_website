import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion as m } from "framer-motion";

import { useTranslation } from "@/international/useTranslation";
import LangSwitch from "@/components/buttons/LangSwitch";

export default function Home() {
    const { t } = useTranslation("home");

    return (
        <>
            <Head>
                <title>Pragmatas</title>
                <meta name="description" content="Arte e Design com Sentido" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={"ContentViewer"}>
                <h3>{t.greeting}</h3>
                <h4>{t.welcomeMessage}</h4>
                <Link href={"/who"}>{t.ctaButton}</Link>
            </m.main>
        </>
    );
}
