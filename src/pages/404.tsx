import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function Custom404() {
    const tSimple = useSimpleTranslation();

    return (
        <div>
            <h4>{tSimple.pages[9]?.paragraphs?.[0]}</h4>
        </div>
    );
}
