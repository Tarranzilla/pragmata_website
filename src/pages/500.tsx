import { useTranslation } from "@/international/useTranslation";

export default function Custom500() {
    const { t } = useTranslation("common");

    return (
        <div>
            <h4>{t.pageDescription500}</h4>
        </div>
    );
}
