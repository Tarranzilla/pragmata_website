import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Custom500() {
    const tSimple = useSimpleTranslation();

    return (
        <div>
            <h4>{tSimple.pages[10]?.paragraphs?.[0]}</h4>
        </div>
    );
}
