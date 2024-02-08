import { motion as m } from "framer-motion";

import { Product } from "@/types/WebStructure";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import Head from "next/head";

import Link from "next/link";

export default function Shop() {
    const tSimple = useSimpleTranslation();

    return (
        <>
            <Head>
                <title>{tSimple.pages[5]?.name}</title>
                <meta name="description" content={tSimple.pages[5]?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.div
                initial={{ opacity: 0, y: "100vh" }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                className="ContentViewer"
            >
                <div className="ProductList">
                    {tSimple.pages[5]?.products?.map((product: Product, index: number) => (
                        <Link href={product.path} className="Product_Container" key={index}>
                            <h2 className="ProductTitle">{product.name}</h2>
                            <div className="ProductSubtitle">{product.subtitle}</div>
                            <div className="ProductDescription">{product.description}</div>
                            <div className="CategoryList">
                                {product.categories.map((category) => (
                                    <div key={category} className="CategoryItem">
                                        {category}
                                    </div>
                                ))}
                            </div>
                            <img src={product.bannerImage ? product.bannerImage : ""} className="ProjectBgImage" alt="" />
                        </Link>
                    ))}
                </div>
            </m.div>
        </>
    );
}
