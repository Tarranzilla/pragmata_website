import { motion as m } from "framer-motion";

import { useTranslation, ShopTranslations } from "@/international/useTranslation";

export default function Shop() {
    const t = useTranslation<ShopTranslations>("shop");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <p>{t.description1}</p>
        </m.div>
    );
}
