import { GetStaticPaths, GetStaticProps } from "next";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { Project } from "@/types/WebStructure";

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
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <h2>{project.subtitle}</h2>
            <h3>{project.description}</h3>
            {/* Render other project details */}
        </div>
    );
};

export default ProjectPage;
