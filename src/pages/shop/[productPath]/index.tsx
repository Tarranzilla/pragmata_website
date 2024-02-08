import { GetStaticPaths, GetStaticProps } from "next";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useSelector } from "react-redux";

import Image from "next/image";

import { productPaths } from "@/types/WebStructure";

import { Product } from "@/types/WebStructure";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";

import { motion as m, AnimatePresence } from "framer-motion";

import ProductCard from "@/components/shop/ProductCard";

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
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

    const [loadedImages, setLoadedImages] = useState(0);

    const [contextIsOpen, setContextIsOpen] = useState(false);
    const [activeSubproductGroup, setActiveSubproductGroup] = useState<string | null>(null);

    useEffect(() => {
        if (product && loadedImages === product.imageGroups?.reduce((total, group) => total + group.images.length, 0)) {
            // All images have loaded
        }

        // Set the active subproduct group to the first subgroup when the product changes
        if (product && product.subproducts && product.subproducts.length > 0) {
            setActiveSubproductGroup(product.subproducts[0].key);
        }
    }, [loadedImages, product]);

    useEffect(() => {
        if (product) {
            const newQuantities = { ...quantities };
            product.subproducts?.forEach((subproductGroup) => {
                subproductGroup.products.forEach((subproduct) => {
                    const cartItem = cartItems.find((item) => item.id === subproduct.translationKey);
                    newQuantities[subproduct.translationKey] = cartItem ? cartItem.quantity : 0;
                });
            });
            setQuantities(newQuantities);
        }
    }, [cartItems, product]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Project_Page">
            {product.subproducts && (
                <>
                    <div className="Subproducts_Container_Wrapper">
                        <div className="Subproducts_Container_Fader"></div>
                        <div className="Subproducts_Container">
                            <AnimatePresence mode="wait">
                                {product.subproducts
                                    .find((subproductGroup) => subproductGroup.key === activeSubproductGroup)
                                    ?.products.map((product) => (
                                        <ProductCard product={product} key={product.name} />
                                    ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="subproducts_classes_container_wrapper">
                        <div className="subproducts_classes_container_fader"></div>
                        <div className="subproducts_classes_container">
                            {product.subproducts.map((subproductGroup) => (
                                <div
                                    key={subproductGroup.key}
                                    className={`subproduct_class ${activeSubproductGroup === subproductGroup.key ? "active" : ""}`}
                                    onClick={() => setActiveSubproductGroup(subproductGroup.key)}
                                >
                                    {subproductGroup.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <div className="Product_Page_Header">
                <h1 className="ProductTitle">{product.name}</h1>
                <h2 className="ProductSubtitle">{product.subtitle}</h2>
                <h3 className="ProductDescription">{product.description}</h3>
                <div className="CategoryList">
                    {product.categories.map((category) => (
                        <div key={category} className="CategoryItem Inverted_CategoryItem">
                            {category}
                        </div>
                    ))}
                </div>
            </div>

            <button
                className={contextIsOpen ? "Product_Page_ContextButton Active" : "Product_Page_ContextButton"}
                onClick={() => {
                    setContextIsOpen(!contextIsOpen);
                }}
            >
                {tSimple.common.contextBtn}
            </button>

            {contextIsOpen && (
                <div className="ImageList">
                    {product.imageGroups?.map((imageGroup) => (
                        <div key={imageGroup.name} className={`ImageGroup ${imageGroup.layout}`}>
                            <h2>{imageGroup.name}</h2>
                            {imageGroup.images.map((image) => (
                                <div key={image} className="ImageItem">
                                    <Image
                                        className="DetailImage"
                                        width={800}
                                        height={800}
                                        src={image}
                                        alt={product.name}
                                        onLoad={() => setLoadedImages((prev) => prev + 1)}
                                        style={{ opacity: loadedImages ? 1 : 0 }}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </m.div>
    );
};

export default ProductPage;
