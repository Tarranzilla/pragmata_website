import { motion as m } from "framer-motion";

import { useTranslation, ProjectsTranslations, ProjectListTranslations, CommonTranslations } from "@/international/useTranslation";

export default function Projects() {
    const t = useTranslation<ProjectsTranslations>("projects");
    const tCommon = useTranslation<CommonTranslations>("common");
    const tProjList = useTranslation<ProjectListTranslations>("projList");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer Project_ContentViewer">
            {tProjList.projects.map((project, index) => (
                <div key={index} className="Project_Container">
                    <h2>{project.title}</h2>
                    <h3>{project.subtitle}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </m.div>
    );
}

/*

            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <div key={n} className="Project_Container">
                    <h2>{tProjList[`project${n}Title`]}</h2>
                    <h3>{tProjList[`project${n}Subtitle`]}</h3>
                    <p>{tProjList[`project${n}Description`]}</p>
                </div>
            ))}

*/
