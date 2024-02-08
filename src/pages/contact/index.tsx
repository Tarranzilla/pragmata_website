import { motion as m } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Contact() {
    const tSimple = useSimpleTranslation();

    return (
        <m.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="ContentViewer"
        >
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
