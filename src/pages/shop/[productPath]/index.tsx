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
    const dispatch = useDispatch();
    const tSimple = useSimpleTranslation();

    const product = tSimple.pages[5].products?.find((product: Product) => `/shop/${productPath}` === product.path);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    let quantity = 0;

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
            <h1 className="ProductTitle">{product.name}</h1>
            <h2 className="ProductSubtitle">{product.subtitle}</h2>
            <h3 className="ProductDescription">{product.description}</h3>
            <div className="CategoryList">
                {product.categories.map((category) => (
                    <div key={category} className="CategoryItem">
                        {category}
                    </div>
                ))}
            </div>
            <h2 className="ProductPrice">R${product.price},00</h2>
            <button
                className="AddToCartButton"
                onClick={() => {
                    addToCartAction(product.translationKey);
                }}
            >
                Adicionar ao Carrinho {quantity > 0 ? `(${quantity})` : ""}
            </button>
            <div className="ImageList">
                {product.images?.map((image) => (
                    <div key={image} className="ImageItem">
                        <Image className="DetailImage" width={800} height={800} src={image} alt={product.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
