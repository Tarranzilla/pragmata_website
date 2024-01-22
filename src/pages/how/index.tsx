import { motion as m } from "framer-motion";

import { useTranslation, HowTranslations } from "@/international/useTranslation";

export default function How() {
    const t = useTranslation<HowTranslations>("how");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <p>{t.description1}</p>
            <p>{t.description2}</p>
            <p>{t.description3}</p>
            <p>{t.description4}</p>
            <p>{t.description5}</p>

            <p>{t.referenceTitle}</p>
            <div className="ReferenceList">
                {t.referenceList.map((reference, index) => (
                    <div key={index} className="Reference">
                        <a href={reference.link} target="_blank" rel="noopener noreferrer" className="ReferenceTitle">
                            {reference.title}
                        </a>
                        <h4 className="ReferenceDescription">{reference.author}</h4>
                    </div>
                ))}
            </div>
        </m.div>
    );
}
