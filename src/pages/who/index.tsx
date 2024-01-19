import { motion as m } from "framer-motion";

import { useTranslation } from "@/international/useTranslation";

export default function Who() {
    const { t } = useTranslation("who");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <p>{t.description1}</p>
            <p>{t.description2}</p>
            <p>{t.description3}</p>
            <p>{t.description4}</p>
            <p>{t.description5}</p>
            <p>{t.description6}</p>
            <p>{t.description7}</p>
            <p>{t.description8}</p>
            <p>{t.description9}</p>
            <p>{t.description10}</p>
            <p>{t.description11}</p>
            <p>{t.description12}</p>
            <p>{t.description13}</p>
            <p>{t.description14}</p>
            <p>{t.description15}</p>
            <p>{t.description16}</p>
        </m.div>
    );
}