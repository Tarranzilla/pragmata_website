import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
// ... other imports
import { subproductPaths } from "@/types/WebStructure";

import { motion as m } from "framer-motion";

import { findProductByTranslationKeyWebStruc } from "@/types/WebStructure";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productPath = params?.productPath;
    const objectPath = params?.objectPath;

    console.log(productPath, objectPath);

    return { props: { productPath, objectPath } };
};

type ObjectPathPageProps = {
    productPath: string;
    objectPath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = subproductPaths.map((subproductPath) => {
        const [productPath, objectPath] = subproductPath.split("/");
        return {
            params: { productPath, objectPath },
        };
    });

    return { paths, fallback: true };
};

const ObjectPathPage: React.FC<ObjectPathPageProps> = ({ productPath, objectPath }) => {
    const router = useRouter();
    const tSimple = useSimpleTranslation();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const product = findProductByTranslationKeyWebStruc(objectPath, tSimple);

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Project_Page">
            <h1>{product?.name}</h1>
            <p>{product?.description}</p>
            <img className="ImageItem" src={product?.bannerImage} alt="" />
        </m.div>
    );
};

export default ObjectPathPage;
