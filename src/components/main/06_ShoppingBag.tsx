import { motion as m, AnimatePresence } from "framer-motion";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMenuOpen, setCartHelperOpen } from "@/store/slices/interfaceSlice";
import { addCartItem, decrementCartItem, removeCartItem } from "@/store/slices/cartSlice";

import { useEffect, useState } from "react";

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
                const product = products.find((product) => product.translationKey === cartItem.id);
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
                    {cartItems.length < 1 && <h5 className="EmptyCartTitle">{tSimple.cart.emptyCartMessage}</h5>}

                    {cartItems.length > 0 && (
                        <div className="BagList">
                            {cartItems.map((cartItem) => {
                                if (products) {
                                    const product = products.find((product) => product.translationKey === cartItem.id);
                                    if (product) {
                                        return (
                                            <div className="BagItem" key={cartItem.id}>
                                                <div className="Bag_Item_Left">imagem</div>
                                                <div className="Bag_Item_Right">
                                                    <h2>{product.name}</h2>
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
                                            </div>
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
                            <div className="CheckoutBtn Disabled">{tSimple.cart.checkOutActionEmptyCartText}</div>
                        ) : (
                            <a className="CheckoutBtn" href={generateCartMessage()} target="_blank" rel="noopener noreferrer">
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
