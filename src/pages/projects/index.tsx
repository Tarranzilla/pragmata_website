import { motion as m } from "framer-motion";
import Link from "next/link";

import { Project } from "@/types/WebStructure";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Projects() {
    const tSimple = useSimpleTranslation();

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer Project_ContentViewer">
            {tSimple.pages[4]?.projects?.map((project: Project, index: number) => (
                <Link href={project.path} key={index} className="Project_Container">
                    <h2>{project.name}</h2>
                    <h3>{project.subtitle}</h3>
                    <p>{project.description}</p>
                </Link>
            ))}
        </m.div>
    );
}
