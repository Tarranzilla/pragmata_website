import { GetStaticPaths, GetStaticProps } from "next";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { Project } from "@/types/WebStructure";
import Image from "next/image";
import { useState, useEffect } from "react";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const projectPath = params?.projectPath;

    return { props: { projectPath } };
};

type ProjectPageProps = {
    projectPath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: true };
};

const ProjectPage: React.FC<ProjectPageProps> = ({ projectPath }) => {
    const tSimple = useSimpleTranslation();
    const project = tSimple.pages[4].projects?.find((project: Project) => `/projects/${projectPath}` === project.path);

    const [loadedImages, setLoadedImages] = useState(0);

    useEffect(() => {
        if (project && loadedImages === project.imageGroups?.reduce((total, group) => total + group.images.length, 0)) {
            // All images have loaded
        }
    }, [loadedImages, project]);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="Project_Page">
            <h1 className={"ProjectTitle"}>{project.name}</h1>
            <h2 className={"ProjectSubtitle"}>{project.subtitle}</h2>
            <h3 className={"ProjectDescription"}>{project.description}</h3>
            <div className="CategoryList">
                {project.categories.map((category) => (
                    <div key={category} className="CategoryItem">
                        {category}
                    </div>
                ))}
            </div>
            <div className="ImageList">
                {project.imageGroups?.map((imageGroup) => (
                    <div key={imageGroup.name} className={`ImageGroup ${imageGroup.layout}`}>
                        <h2>{imageGroup.name}</h2>
                        {imageGroup.images.map((image) => (
                            <div key={image} className="ImageItem">
                                <Image
                                    className="DetailImage"
                                    width={800}
                                    height={800}
                                    src={image}
                                    alt={project.name}
                                    onLoad={() => setLoadedImages((prev) => prev + 1)}
                                    style={{ opacity: loadedImages ? 1 : 0 }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
