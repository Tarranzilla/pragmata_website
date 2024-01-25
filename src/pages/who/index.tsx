import { motion as m } from "framer-motion";
import Image from "next/image";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Who() {
    const tSimple = useSimpleTranslation();
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
            <p>{tSimple.pages[1]?.paragraphs?.[0]}</p>
            <p>{tSimple.pages[1]?.paragraphs?.[1]}</p>
            <p>{tSimple.pages[1]?.paragraphs?.[2]}</p>
            <p>{tSimple.pages[1]?.paragraphs?.[3]}</p>
            <p>{tSimple.pages[1]?.paragraphs?.[4]}</p>
            <p>{tSimple.pages[1]?.paragraphs?.[5]}</p>
            <p>{tSimple.pages[1]?.paragraphs?.[6]}</p>
            <p>{tSimple.pages[1]?.paragraphs?.[7]}</p>
        </m.div>
    );
}
