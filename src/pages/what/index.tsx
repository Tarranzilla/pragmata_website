import { motion as m } from "framer-motion";

import { useTranslation } from "@/international/useTranslation";
import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { WhatTranslations, CategoryTranslations } from "@/international/useTranslation";

export default function What() {
    const t = useTranslation<WhatTranslations>("what");

    const colorMode = useSelector((state: RootState) => state.interface.colorMode);

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ContentViewer">
            <div className="ServiceList">
                {t.categories.map((category: CategoryTranslations, index: number) => (
                    <div key={index}>
                        <h2>{category.title}</h2>
                        <ul>
                            {category.subitems.map((subitem: string, index: number) => (
                                <li key={index}>{subitem}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </m.div>
    );
}
