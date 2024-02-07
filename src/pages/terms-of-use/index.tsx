import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { motion as m } from "framer-motion";

export default function TermsOfUse() {
    const tSimple = useSimpleTranslation();
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <div className="Page_Card">
                <h4>{tSimple.pages[8]?.paragraphs?.[0]}</h4>
            </div>
        </m.div>
    );
}
