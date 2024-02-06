import { Product } from "@/types/WebStructure";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    );
}
