import { useEffect } from "react";
import { setActivePage, setActiveSubpage, setActiveItem, setActivePageTranslationKey } from "@/store/slices/interfaceSlice";
import { pathNameHelper } from "@/store/slices/interfaceSlice";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

export default function ReduxManager() {
    const router = useRouter();
    const route = router.route;
    const path = router.asPath;

    const { page, pageLink, subpage, subpageLink, item, itemLink, pageTranslationKey } = pathNameHelper(path);

    const dispatch = useDispatch();

    const setActivePageAction = (page: any, subpage: any, item: any, pageTranslationKey: any) => {
        dispatch(setActivePage(page));
        dispatch(setActiveSubpage(subpage)); // Dispatch the action
        dispatch(setActiveItem(item)); // Dispatch the action
        dispatch(setActivePageTranslationKey(pageTranslationKey));
    };

    useEffect(() => {
        setActivePageAction(page, subpage, item, pageTranslationKey);
        console.log(page);
        console.log(subpage);
        console.log(item);
    }, [page, subpage, item]);

    return null;
}
