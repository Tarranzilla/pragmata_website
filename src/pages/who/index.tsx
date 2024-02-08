import { motion as m } from "framer-motion";
import Image from "next/image";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Head from "next/head";

export default function Who() {
    const tSimple = useSimpleTranslation();
    const colorMode = useSelector((state: RootState) => state.interface.colorMode);

    return (
        <>
            <Head>
                <title>{tSimple.pages[1]?.name}</title>
                <meta name="description" content={tSimple.pages[1]?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <m.div
                initial={{ opacity: 0, y: "100vh" }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                className="ContentViewer"
            >
                <div className="Page_Card">
                    <Image
                        src="/imgs/pragmatas_logo_comercial_black.png"
                        width={500}
                        height={500}
                        alt="pragmatas"
                        className={`Image ${colorMode === "dark" ? "InvertedImage" : ""}`}
                    />
                    <p>{tSimple.pages[1]?.paragraphs?.[0]}</p>
                    <p>{tSimple.pages[1]?.paragraphs?.[1]}</p>
                    <p>{tSimple.pages[1]?.paragraphs?.[2]}</p>
                    <p>{tSimple.pages[1]?.paragraphs?.[3]}</p>
                    <p>{tSimple.pages[1]?.paragraphs?.[4]}</p>
                    <p>{tSimple.pages[1]?.paragraphs?.[5]}</p>
                    <p>{tSimple.pages[1]?.paragraphs?.[6]}</p>
                    <p>{tSimple.pages[1]?.paragraphs?.[7]}</p>
                </div>
            </m.div>
        </>
    );
}
