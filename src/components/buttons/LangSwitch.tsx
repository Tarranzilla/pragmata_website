import { useRouter } from "next/router";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import Language_Icon from "../icons/Language_Icon";
import { useState, useEffect } from "react";

export default function LangSwitch() {
    const tSimple = useSimpleTranslation();

    return (
        <button className="Nav_Button">
            <Language_Icon />
            <p className="">{tSimple.menu.languageBtnText}</p>
        </button>
    );
}
