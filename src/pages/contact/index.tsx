import { motion as m } from "framer-motion";

import { useTranslation, ContactTranslations } from "@/international/useTranslation";

export default function Contact() {
    const t = useTranslation<ContactTranslations>("contact");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <p>{t.description1}</p>
        </m.div>
    );
}
