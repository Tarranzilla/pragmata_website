import { motion as m } from "framer-motion";

import { Product } from "@/types/WebStructure";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import Link from "next/link";

export default function Shop() {
    const tSimple = useSimpleTranslation();

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
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
                        <img src={product.images ? product.images[0] : ""} className="ProjectBgImage" alt="" />
                    </Link>
                ))}
            </div>
        </m.div>
    );
}
