import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMenuOpen } from "@/store/slices/interfaceSlice";

import { useEffect, useState } from "react";

import { Page, Project, Product, Service } from "@/types/WebStructure";

import ContextIcon from "../icons/Context_Icon";

export default function Menu() {
    const dispatch = useDispatch();
    const tSimple = useSimpleTranslation();

    const isMenuOpen = useSelector((state: RootState) => state.interface.isMenuOpen);
    const toggleMenuAction = () => {
        dispatch(toggleMenuOpen());
    };

    const currentPage = useSelector((state: RootState) => state.interface.activePage);
    const translatedPage = tSimple.pages.find((page) => page.translationKey === currentPage);
    const isSubpageActive = useSelector((state: RootState) => state.interface.isSubpageActive);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<(Page | Project | Product | Service)[]>([]);
    const [isSearchBarFocused, setSearchBarFocused] = useState(false);

    function searchWebStructure(query: string) {
        // If the query is an empty string, return all pages except 404 and 500
        if (query === "") {
            return tSimple.pages.filter((page) => page.name !== "404" && page.name !== "500");
        }

        let results: (Page | Project | Product | Service)[] = [];
        const lowerCaseQuery = query.toLowerCase();

        tSimple.pages.forEach((page) => {
            // Check if the page name matches the query
            if (page.name.toLowerCase().includes(lowerCaseQuery)) {
                results.push(page);
            }

            // Check if any project name matches the query
            if (page.projects) {
                const matchingProject = page.projects.find((project) => project.name.toLowerCase().includes(lowerCaseQuery));
                if (matchingProject) {
                    results.push(matchingProject);
                }
            }

            // Check if any product name matches the query
            if (page.products) {
                const matchingProduct = page.products.find((product) => product.name.toLowerCase().includes(lowerCaseQuery));
                if (matchingProduct) {
                    results.push(matchingProduct);
                }
            }

            // Check if any service name matches the query
            if (page.services) {
                const matchingService = page.services.find((service) => service.name.toLowerCase().includes(lowerCaseQuery));
                if (matchingService) {
                    results.push(matchingService);
                }
            }
        });

        return results;
    }

    useEffect(() => {
        const results = searchWebStructure(searchQuery);
        setSearchResults(results);
    }, [searchQuery, translatedPage]);

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <m.div
                    initial={{ opacity: 0, y: "100vh" }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    className="Menu"
                >
                    <m.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        onFocus={() => setSearchBarFocused(true)}
                        onBlur={() => setTimeout(() => setSearchBarFocused(false), 200)}
                        className="SearchBar"
                    >
                        <ContextIcon />
                        <input
                            type="text"
                            placeholder={tSimple.navbar.searchBtnPlaceholder}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="SearchBar_Input"
                        />
                    </m.div>

                    <m.ul
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="PageList"
                        key={"SearchList"}
                    >
                        {searchResults.map((result, index) => (
                            <Link className="MenuLink" href={result.path} key={index} onClick={toggleMenuAction}>
                                {result.name}
                            </Link>
                        ))}
                    </m.ul>
                </m.div>
            )}
        </AnimatePresence>
    );
}
