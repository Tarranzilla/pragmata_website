import { GetStaticPaths, GetStaticProps } from "next";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { Product } from "@/types/WebStructure";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productPath = params?.productPath;

    return { props: { productPath } };
};

type ProductPageProps = {
    productPath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return { paths: [], fallback: true };
};

const ProductPage: React.FC<ProductPageProps> = ({ productPath }) => {
    const tSimple = useSimpleTranslation();
    const product = tSimple.pages[5].products?.find((product: Product) => `/shop/${productPath}` === product.path);
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.subtitle}</h2>
            <h3>{product.description}</h3>
            {/* Render other project details */}
        </div>
    );
};

export default ProductPage;
