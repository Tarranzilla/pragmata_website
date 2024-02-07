import { motion as m } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Contact() {
    const tSimple = useSimpleTranslation();

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <div className="Page_Card">
                <p>{tSimple.pages[6]?.paragraphs?.[0]}</p>
                <p>{tSimple.pages[6]?.paragraphs?.[1]}</p>
                <p>{tSimple.pages[6]?.paragraphs?.[2]}</p>
                <p>{tSimple.pages[6]?.paragraphs?.[3]}</p>
                <p>{tSimple.pages[6]?.paragraphs?.[4]}</p>
            </div>
        </m.div>
    );
}
