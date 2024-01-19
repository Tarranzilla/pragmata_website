import Link from "next/link";
import { motion as m } from "framer-motion";

import { useTranslation } from "@/international/useTranslation";

type MenuProps = {
    closeMenu: () => void;
};

export default function Menu({ closeMenu }: MenuProps) {
    const { t: tCommon } = useTranslation("common");

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Menu">
            <div className="PageList">
                <Link onClick={closeMenu} href="/">
                    {tCommon.page1}
                </Link>
                <Link onClick={closeMenu} href="/who">
                    {tCommon.page2}
                </Link>
                <Link onClick={closeMenu} href="/what">
                    {tCommon.page3}
                </Link>
                <Link onClick={closeMenu} href="/how">
                    {tCommon.page4}
                </Link>
                <Link onClick={closeMenu} href="/projects">
                    {tCommon.page5}
                </Link>
                <Link onClick={closeMenu} href="/shop">
                    {tCommon.page6}
                </Link>
                <Link onClick={closeMenu} href="/contact">
                    {tCommon.page7}
                </Link>
            </div>
        </m.div>
    );
}
