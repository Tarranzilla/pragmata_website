import { motion as m } from "framer-motion";

import { Product } from "@/types/WebStructure";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import Link from "next/link";

export default function Shop() {
    const tSimple = useSimpleTranslation();

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <div className="ShopList">
                {tSimple.pages[5]?.products?.map((product: Product, index: number) => (
                    <Link href={product.path} className="ShopItem" key={index}>
                        <h2 className="ShopItemTitle">{product.name}</h2>
                        <div className="ShopItemSubtitle">{product.subtitle}</div>
                        <div className="ShopItemDescription">{product.description}</div>
                        <div className="CategoryList">
                            {product.categories.map((category) => (
                                <div key={category} className="CategoryItem">
                                    {category}
                                </div>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </m.div>
    );
}
