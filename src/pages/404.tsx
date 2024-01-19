import { useTranslation } from "@/international/useTranslation";

export default function Custom404() {
    const { t } = useTranslation("common");

    return (
        <div>
            <h4>{t.pageDescription404}</h4>
        </div>
    );
}
