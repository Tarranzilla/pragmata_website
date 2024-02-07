import { GetStaticPaths, GetStaticProps } from "next";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { setActivePage, setCartOpen } from "@/store/slices/interfaceSlice";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "@/store/slices/cartSlice";

import Image from "next/image";

import { pathNameHelper } from "@/store/slices/interfaceSlice";

import { useRouter } from "next/router";

import { productPaths } from "@/types/WebStructure";

import { Product } from "@/types/WebStructure";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";

import { motion as m } from "framer-motion";

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
    const dispatch = useDispatch();
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

    const router = useRouter();
    const path = router.asPath;

    const { page, pageLink, subpage, subpageLink, item, itemLink, pageTranslationKey } = pathNameHelper(path);

    const addToCartAction = (translationKey: string) => {
        const productExistsInCart = quantities[translationKey] && quantities[translationKey] > 0;

        dispatch(addCartItem(translationKey));

        if (!productExistsInCart) {
            dispatch(setCartOpen(true));
        }
    };

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
                            {product.subproducts
                                .find((subproductGroup) => subproductGroup.key === activeSubproductGroup)
                                ?.products.map((product) => (
                                    <div key={product.name} className="Subproduct">
                                        <div className="SubproductImageContainer">
                                            <img className="subproduct_image" src={product.bannerImage} alt="" />
                                        </div>

                                        <Link href={product.path} className="InfoButton">
                                            ...
                                        </Link>
                                        <button
                                            className="AddToCartButton"
                                            onClick={() => {
                                                addToCartAction(product.translationKey);
                                            }}
                                        >
                                            {tSimple.common.addToCartBtn}{" "}
                                            {quantities[product.translationKey] > 0 ? `(${quantities[product.translationKey]})` : ""}
                                        </button>
                                    </div>
                                ))}
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
