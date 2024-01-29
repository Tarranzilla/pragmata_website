import { useSimpleTranslation } from "@/international/useSimpleTranslation";

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

    return <button onClick={share}>{tSimple.navbar.shareBtnText}</button>;
}
