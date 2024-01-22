import { motion as m } from "framer-motion";

import { useTranslation, ShopTranslations } from "@/international/useTranslation";

export default function Shop() {
    const t = useTranslation<ShopTranslations>("shop");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <div className="ShopList">
                {t.products.map((product, index) => (
                    <div className="ShopItem" key={index}>
                        <h2 className="ShopItemTitle">{product.title}</h2>
                        <div className="ShopItemSubtitle">{product.subtitle}</div>
                        <div className="ShopItemDescription">{product.description}</div>
                    </div>
                ))}
            </div>
        </m.div>
    );
}
