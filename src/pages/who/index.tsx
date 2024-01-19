import { motion as m } from "framer-motion";
import Image from "next/image";

import { useTranslation } from "@/international/useTranslation";

import { useColorMode } from "../_app";

export default function Who() {
    const { t } = useTranslation("who");

    const { colorMode } = useColorMode();

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
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
        </m.div>
    );
}
