import { motion as m } from "framer-motion";

import { Reference } from "@/types/WebStructure";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

export default function How() {
    const tSimple = useSimpleTranslation();

    return (
        <m.div
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
            className="ContentViewer"
        >
            <div className="Page_Card">
                <p>{tSimple.pages[3]?.paragraphs?.[0]}</p>
                <p>{tSimple.pages[3]?.paragraphs?.[1]}</p>
                <p>{tSimple.pages[3]?.paragraphs?.[2]}</p>
                <p>{tSimple.pages[3]?.paragraphs?.[3]}</p>
                <p>{tSimple.pages[3]?.paragraphs?.[4]}</p>
                <p>{tSimple.pages[3]?.paragraphs?.[5]}</p>

                <div className="ReferenceList">
                    {tSimple.pages[3]?.references?.map((reference: Reference, index: number) => (
                        <div key={index} className="Reference">
                            <a href={reference.url} target="_blank" rel="noopener noreferrer" className="ReferenceTitle">
                                {reference.title}
                            </a>
                            <h4 className="ReferenceDescription">{reference.author}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </m.div>
    );
}
