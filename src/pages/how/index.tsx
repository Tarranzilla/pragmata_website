import { motion as m } from "framer-motion";

import { useTranslation, HowTranslations } from "@/international/useTranslation";

export default function How() {
    const t = useTranslation<HowTranslations>("how");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <p>{t.description1}</p>
        </m.div>
    );
}
