import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { motion as m } from "framer-motion";

export default function PrivacyPolicy() {
    const tSimple = useSimpleTranslation();
    return (
        <m.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="ContentViewer"
        >
            <div className="Page_Card">
                <h4>{tSimple.pages[7]?.paragraphs?.[0]}</h4>
            </div>
        </m.div>
    );
}
