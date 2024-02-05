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
    let quantity = 0;

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

    if (product) {
        const cartItem = cartItems.find((item) => item.id === product.translationKey);
        quantity = cartItem ? cartItem.quantity : 0;
    }

    const router = useRouter();
    const path = router.asPath;

    const { page, pageLink, subpage, subpageLink, item, itemLink, pageTranslationKey } = pathNameHelper(path);

    const addToCartAction = (translationKey: string) => {
        dispatch(addCartItem(translationKey));
        dispatch(setCartOpen(true));
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="Project_Page">
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

            {product.subproducts && (
                <>
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

                    <div className="Subproducts_Container">
                        {product.subproducts
                            .find((subproductGroup) => subproductGroup.key === activeSubproductGroup)
                            ?.products.map((product) => (
                                <div key={product.name} className="Subproduct">
                                    <div className="SubproductImageContainer">
                                        <img className="subproduct_image" src={product.bannerImage} alt="" />
                                    </div>
                                    {/* Render your product here */}
                                    <button
                                        className="AddToCartButton"
                                        onClick={() => {
                                            addToCartAction(product.translationKey);
                                        }}
                                    >
                                        Adicionar ao Carrinho {quantity > 0 ? `(${quantity})` : ""}
                                    </button>
                                </div>
                            ))}
                    </div>
                </>
            )}

            <button
                className="Product_Page_ContextButton"
                onClick={() => {
                    setContextIsOpen(!contextIsOpen);
                }}
            >
                + Contexto
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
        </div>
    );
};

export default ProductPage;

/*

                <div className="Product_Buy_Info">
                    <h2 className="ProductPrice">R${product.price},00</h2>
                    <button
                        className="AddToCartButton"
                        onClick={() => {
                            addToCartAction(product.translationKey);
                        }}
                    >
                        Adicionar ao Carrinho {quantity > 0 ? `(${quantity})` : ""}
                    </button>
                </div>

*/
