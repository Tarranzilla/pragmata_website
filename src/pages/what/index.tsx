import { motion as m } from "framer-motion";

import { Service } from "@/types/WebStructure";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function What() {
    const tSimple = useSimpleTranslation();

    return (
        <m.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="ContentViewer"
        >
            <div className="ServiceList">
                {tSimple.pages[2]?.services?.map((service: Service, index: number) => (
                    <div className="ServiceGroup" key={index}>
                        <h2>{service.name}</h2>
                        <ul className="ServiceGroup_List">
                            {service.items.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </m.div>
    );
}
