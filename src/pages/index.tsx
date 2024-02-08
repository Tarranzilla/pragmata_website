import Head from "next/head";
import Image from "next/image";

import { motion as m } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Home() {
    const tSimple = useSimpleTranslation();
    const colorMode = useSelector((state: RootState) => state.interface.colorMode);

    return (
        <>
            <Head>
                <title>Pragmatas</title>
                <meta name="description" content="Arte e Design com Sentido" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.main
                initial={{ opacity: 0, y: "100vh" }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                className={"ContentViewer"}
            >
                <div className="Page_Card">
                    <Image
                        src="/imgs/pragmatas_black.png"
                        width={500}
                        height={500}
                        alt="pragmatas"
                        className={`Image ${colorMode === "dark" ? "InvertedImage" : ""}`}
                    />
                    <p>{tSimple.pages[0]?.paragraphs?.[0]}</p>
                    <p>{tSimple.pages[0]?.paragraphs?.[1]}</p>
                    <p>{tSimple.pages[0]?.paragraphs?.[2]}</p>
                    <Image
                        src="/imgs/noite_estrelada_black.png"
                        width={500}
                        height={500}
                        alt="pragmatas"
                        className={`Image ${colorMode === "dark" ? "InvertedImage" : ""}`}
                    />
                    <p>{tSimple.pages[0]?.paragraphs?.[3]}</p>
                    <p>{tSimple.pages[0]?.paragraphs?.[4]}</p>
                    <p>{tSimple.pages[0]?.paragraphs?.[5]}</p>
                    <p>{tSimple.pages[0]?.paragraphs?.[6]}</p>
                    <p>{tSimple.pages[0]?.paragraphs?.[7]}</p>
                    <Image
                        src="/imgs/padrao_01_black.png"
                        width={500}
                        height={500}
                        alt="pragmatas"
                        className={`Image ${colorMode === "dark" ? "InvertedImage" : ""}`}
                    />
                </div>
            </m.main>
        </>
    );
}
