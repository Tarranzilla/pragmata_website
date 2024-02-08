import { Product } from "@/types/WebStructure";
import Image from "next/image";
import Link from "next/link";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { motion as m } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
    const tSimple = useSimpleTranslation();

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="subproduct_wrapper" key={product.name}>
            <Link href={product.path} className="Subproduct">
                <div className="SubproductImageContainer">
                    <img className="subproduct_image" src={product.bannerImage} alt="" />
                </div>
                <button className="Product_Card_Name">{product.name}</button>
            </Link>
        </m.div>
    );
}

/*

                <button className="Subproduct_Material_Selector">
                    <p className="Material_Icon">M</p>
                    <img className="Subproduct_Material_Image" src="/materialFiles/material_003_plastico.png" alt="plastico reciclavel" />
                </button>

*/
