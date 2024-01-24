import { motion as m } from "framer-motion";
import Image from "next/image";

import { useTranslation, WhoTranslations } from "@/international/useTranslation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Who() {
    const t = useTranslation<WhoTranslations>("who");
    const colorMode = useSelector((state: RootState) => state.interface.colorMode);

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <Image
                src="/imgs/pragmatas_logo_comercial_black.png"
                width={500}
                height={500}
                alt="pragmatas"
                className={`Image ${colorMode === "dark" ? "InvertedImage" : ""}`}
            />
            <p>{t.description1}</p>
            <p>{t.description2}</p>
            <p>{t.description3}</p>
            <p>{t.description4}</p>
            <p>{t.description5}</p>
            <p>{t.description6}</p>
            <p>{t.description7}</p>
            <p>{t.description8}</p>
        </m.div>
    );
}
