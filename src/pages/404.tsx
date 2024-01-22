import { useTranslation, CommonTranslations } from "@/international/useTranslation";

export default function Custom404() {
    const t = useTranslation<CommonTranslations>("common");

    return (
        <div>
            <h4>{t.pageDescription404}</h4>
        </div>
    );
}
