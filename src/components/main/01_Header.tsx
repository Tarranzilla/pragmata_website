import { useTranslation } from "@/international/useTranslation";
import { Namespace } from "@/international/useTranslation";

type HeaderProps = {
    currentRoute: string;
    colorMode: "light" | "dark";
    setColorMode: (mode: "light" | "dark") => void;
};

export default function Header({ currentRoute, colorMode, setColorMode }: HeaderProps) {
    const { t: tCommon } = useTranslation("common");

    // If currentRoute is '/', change it to 'home'
    const pageNamespace = currentRoute === "" ? "home" : currentRoute;

    const { t: tPage } = useTranslation(pageNamespace);

    const toggleColorMode = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
    };

    const share = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Pragmatas",
                    text: "Check out this website!",
                    url: window.location.href,
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        } else {
            console.log("Web Share API is not supported in your browser.");
        }
    };

    return (
        <div className="Header">
            <button onClick={toggleColorMode}>{tCommon.colorSwitch}</button>

            <div className="Header_Center">
                <h2>{tPage.pageTitle}</h2>
            </div>

            <button onClick={share}>{tCommon.shareBtn}</button>
        </div>
    );
}
