import { motion as m } from "framer-motion";

import { useTranslation } from "@/international/useTranslation";

export default function Projects() {
    const { t } = useTranslation("projects");
    const { t: tCommon } = useTranslation("common");
    const { t: tProjList } = useTranslation("projList");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer Project_ContentViewer">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <div key={n} className="Project_Container">
                    <h2>{tProjList[`project${n}Title`]}</h2>
                    <h3>{tProjList[`project${n}Subtitle`]}</h3>
                    <p>{tProjList[`project${n}Description`]}</p>
                </div>
            ))}
        </m.div>
    );
}
