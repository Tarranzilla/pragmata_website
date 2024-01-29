import { GetStaticPaths, GetStaticProps } from "next";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { setActivePage } from "@/store/slices/interfaceSlice";
import { useDispatch, useSelector } from "react-redux";

import { pathNameHelper } from "@/store/slices/interfaceSlice";

import { useRouter } from "next/router";

import { productPaths } from "@/types/WebStructure";

import { Product } from "@/types/WebStructure";
import { useEffect } from "react";
import { RootState } from "@/store/store";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productPath = params?.productPath;

    return { props: { productPath } };
};

type ProductPageProps = {
    productPath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = productPaths.map((productPath) => ({
        params: { productPath },
    }));

    return { paths, fallback: true };
};

const ProductPage: React.FC<ProductPageProps> = ({ productPath }) => {
    const tSimple = useSimpleTranslation();
    const product = tSimple.pages[5].products?.find((product: Product) => `/shop/${productPath}` === product.path);

    const router = useRouter();
    const path = router.asPath;

    const { page, pageLink, subpage, subpageLink, item, itemLink, pageTranslationKey } = pathNameHelper(path);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="Project_Page">
            <h1>{product.name}</h1>
            <h2>{product.subtitle}</h2>
            <h3>{product.description}</h3>
            <div className="CategoryList">
                {product.categories.map((category) => (
                    <div key={category} className="CategoryItem">
                        {category}
                    </div>
                ))}
            </div>
            <h2 className="ProductPrice">R${product.price},00</h2>
            <button>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://api.whatsapp.com/send?phone=5541999977955&text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20um%20produto"
                >
                    Comprar
                </a>
            </button>
            {/* Render other project details */}
        </div>
    );
};

export default ProductPage;
