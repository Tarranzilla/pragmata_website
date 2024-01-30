import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import Share_Icon from "../icons/Share_Icon";

export default function ShareBtn() {
    const tSimple = useSimpleTranslation();
    const share = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Pragmatas",
                    text: tSimple.navbar.shareBtnLabel,
                    url: window.location.href,
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        } else {
            console.log("Web Share API is not supported in your browser.");
        }
    };

    return (
        <button className="HeaderButton ShareButton" onClick={share}>
            <Share_Icon />
            <p className="DesktopOnly ButtonLabel">{tSimple.navbar.shareBtnText}</p>
        </button>
    );
}
