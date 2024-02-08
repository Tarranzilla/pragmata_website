import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { motion as m } from "framer-motion";
import Head from "next/head";

export default function TermsOfUse() {
    const tSimple = useSimpleTranslation();
    return (
        <>
            <Head>
                <title>{tSimple.pages[8]?.name}</title>
                <meta name="description" content={tSimple.pages[8]?.description} />
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
                    <h4>{tSimple.pages[8]?.paragraphs?.[0]}</h4>
                </div>
            </m.div>
        </>
    );
}
