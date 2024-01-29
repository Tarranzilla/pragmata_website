import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function TermsOfUse() {
    const tSimple = useSimpleTranslation();
    return (
        <div className="ContentViewer">
            <h4>{tSimple.pages[8]?.paragraphs?.[0]}</h4>
        </div>
    );
}
