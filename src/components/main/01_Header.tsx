import { motion as m, AnimatePresence } from "framer-motion";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store/store";

import ShareBtn from "../buttons/ShareBtn";
import ThemeSwitch from "../buttons/ThemeSwitch";

import { Page, Project, Product, Service } from "@/types/WebStructure";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.interface.activePage);
    const isSubpageActive = useSelector((state: RootState) => state.interface.isSubpageActive);
    const tSimple = useSimpleTranslation();
    const translatedPage = tSimple.pages.find((page) => page.translationKey === currentPage);

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
        <div className="Header">
            {/* Color Mode Button */}
            <ThemeSwitch />

            {/* Page Title */}
            <div className="Header_Center">
                <AnimatePresence mode="popLayout">
                    {isSubpageActive && (
                        <m.h2
                            className="HeaderPageTitle"
                            key={translatedPage?.translationKey}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                        >
                            {translatedPage?.name}
                        </m.h2>
                    )}

                    {!isSubpageActive && (
                        <m.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="SearchBar">
                            <input
                                type="text"
                                placeholder={tSimple.navbar.searchBtnPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setSearchBarFocused(true)}
                                onBlur={() => setTimeout(() => setSearchBarFocused(false), 200)}
                                className="SearchBar_Input"
                            />
                        </m.div>
                    )}

                    {!isSubpageActive && isSearchBarFocused && (
                        <m.ul
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className="SearchList"
                            key={"SearchList"}
                        >
                            {searchResults.map((result, index) => (
                                <li key={index}>
                                    <Link href={result.path}>{result.name}</Link>
                                </li>
                            ))}
                        </m.ul>
                    )}
                </AnimatePresence>
            </div>

            {/* Share Button */}
            <ShareBtn />
        </div>
    );
}
