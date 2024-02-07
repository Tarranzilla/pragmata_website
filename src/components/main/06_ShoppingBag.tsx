import { motion as m, AnimatePresence } from "framer-motion";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMenuOpen, setCartHelperOpen, closeMenu, setCartOpen } from "@/store/slices/interfaceSlice";
import { addCartItem, decrementCartItem, removeCartItem } from "@/store/slices/cartSlice";

import { useEffect, useState } from "react";

const cartItemVariants = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    show: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

import Link from "next/link";

export default function ShoppingBag() {
    const dispatch = useDispatch();

    const isCartOpen = useSelector((state: RootState) => state.interface.isCartOpen);
    const isCartHelperOpen = useSelector((state: RootState) => state.interface.isCartHelperOpen);

    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);

    const tSimple = useSimpleTranslation();
    const products = tSimple.pages[5]?.products;

    const generateCartMessage = () => {
        let message = "Olá Pragmatas, tenho interesse em adquirir os seguintes itens:\n\n";

        cartItems.forEach((cartItem) => {
            if (products) {
                let product;
                for (const prod of products) {
                    if (prod.subproducts) {
                        for (const subproductGroup of prod.subproducts) {
                            product = subproductGroup.products.find((product) => product.translationKey === cartItem.id);
                            if (product) break;
                        }
                    }
                    if (product) break;
                }
                if (product) {
                    message += `${cartItem.quantity}X ${product.name}\n`;
                }
            }
        });

        message += `\nTotal = ${cartTotal.toFixed(2)}`;

        // Encode the message in a URL
        const encodedMessage = encodeURIComponent(message);

        // Return a WhatsApp Click to Chat URL
        return `https://wa.me/5541999977955?text=${encodedMessage}`;
    };

    const setCartHelperOpenAction = (value: boolean) => {
        dispatch(setCartHelperOpen(value));
    };

    const setCartOpenAction = (value: boolean) => {
        dispatch(setCartOpen(false));
    };

    return (
        <AnimatePresence mode="popLayout">
            {isCartOpen && (
                <m.div
                    initial={{ opacity: 0, y: "100vh" }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    className="ShoppingBag"
                    key={"ShoppingBag"}
                >
                    <div className="BagHeader">
                        <h2>{tSimple.cart.cartTitle}</h2>
                    </div>
                    {cartItems.length < 1 && <h5 className="EmptyCartTitle">{tSimple.cart.emptyCartMessage}</h5>}

                    {cartItems.length > 0 && (
                        <div className="BagList">
                            {[...cartItems].reverse().map((cartItem, index) => {
                                if (products) {
                                    let product;
                                    for (const prod of products) {
                                        if (prod.subproducts) {
                                            for (const subproductGroup of prod.subproducts) {
                                                product = subproductGroup.products.find((product) => product.translationKey === cartItem.id);
                                                if (product) break;
                                            }
                                        }
                                        if (product) break;
                                    }
                                    if (product) {
                                        return (
                                            <m.div
                                                layoutId={`item-${index}`}
                                                className="BagItem"
                                                key={cartItem.id}
                                                variants={cartItemVariants}
                                                initial="hidden"
                                                animate="show"
                                                exit="exit"
                                            >
                                                <div className="Bag_Item_Left">
                                                    <img className="CartItem_Image" src={cartItem.bannerImage} alt="" />
                                                </div>
                                                <div className="Bag_Item_Right">
                                                    <h2 className="Bag_Item_Name">{product.name}</h2>
                                                    <h3>R$ {cartItem.price}</h3>
                                                    <div className="BagItemFooter">
                                                        <div className="QttySelector">
                                                            <div className="BtnLeft" onClick={() => dispatch(decrementCartItem(cartItem.id))}>
                                                                -
                                                            </div>
                                                            <div className="QttyValue">{cartItem.quantity}</div>
                                                            <div className="BtnRight" onClick={() => dispatch(addCartItem(cartItem.id))}>
                                                                +
                                                            </div>
                                                        </div>
                                                        <div className="RemoveBtn" onClick={() => dispatch(removeCartItem(cartItem.id))}>
                                                            X
                                                        </div>
                                                    </div>
                                                </div>
                                            </m.div>
                                        );
                                    }
                                }
                            })}
                        </div>
                    )}

                    <div className="BagFooter">
                        <div className="BagItem BagTotal">
                            <div className="BagTotal_Left">
                                <h2>Total</h2>
                            </div>
                            <div className="BagTotal_Right">
                                <h3>R$ {cartTotal}</h3>
                            </div>
                        </div>
                        <button
                            className="CheckoutBtn CheckoutHelpBtn"
                            onClick={() => {
                                setCartHelperOpenAction(true);
                            }}
                        >
                            {tSimple.cart.checkOutHelpTitle}
                        </button>
                        {cartItems.length === 0 ? (
                            <Link
                                href={"/shop"}
                                onClick={() => {
                                    setCartOpenAction(false);
                                }}
                                className="CheckoutBtn CheckoutActionButton Disabled"
                            >
                                {tSimple.cart.checkOutActionEmptyCartText}
                            </Link>
                        ) : (
                            <a className="CheckoutBtn CheckoutActionButton" href={generateCartMessage()} target="_blank" rel="noopener noreferrer">
                                {tSimple.cart.checkOutActionText}
                            </a>
                        )}
                    </div>
                </m.div>
            )}
            {isCartHelperOpen && isCartOpen && (
                <m.div
                    className="CartHelper"
                    initial={{ opacity: 0, y: "100vh" }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    key={"CartHelper"}
                >
                    {tSimple.cart.checkOutHelpParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <button
                        className="CartHelperCloseBtn"
                        onClick={() => {
                            setCartHelperOpenAction(false);
                        }}
                    >
                        Entendi
                    </button>
                </m.div>
            )}
        </AnimatePresence>
    );
}
