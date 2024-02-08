import { motion as m } from "framer-motion";
import Link from "next/link";

import { Project } from "@/types/WebStructure";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Projects() {
    const tSimple = useSimpleTranslation();

    return (
        <m.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="ContentViewer Project_ContentViewer"
        >
            {tSimple.pages[4]?.projects?.map((project: Project, index: number) => (
                <Link href={project.path} key={index} className="Project_Container">
                    <h2 className="ProjectTitle">{project.name}</h2>
                    <h3 className="ProjectSubtitle">{project.subtitle}</h3>
                    <p className="ProjectDescription">{project.description}</p>
                    <div className="CategoryList">
                        {project.categories.map((category) => (
                            <div className="CategoryItem" key={category}>
                                {category}
                            </div>
                        ))}
                        <img src={project.bannerImage ? project.bannerImage : ""} className="ProjectBgImage" alt="" />
                    </div>
                </Link>
            ))}
        </m.div>
    );
}
