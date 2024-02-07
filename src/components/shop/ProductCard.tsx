import { Product } from "@/types/WebStructure";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {product.bannerImage && <Image src={product.bannerImage} alt="Product Banner" width={300} height={300} />}
        </div>
    );
}
