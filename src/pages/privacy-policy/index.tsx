import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function PrivacyPolicy() {
    const tSimple = useSimpleTranslation();
    return (
        <div>
            <h4>{tSimple.pages[7]?.paragraphs?.[0]}</h4>
        </div>
    );
}
