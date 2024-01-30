import { motion as m, AnimatePresence } from "framer-motion";
import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleMenuOpen } from "@/store/slices/interfaceSlice";

import { useEffect, useState } from "react";

export default function ShoppingBag() {
    const isCartOpen = useSelector((state: RootState) => state.interface.isCartOpen);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <m.div
                    initial={{ opacity: 0, y: "100vh" }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    exit={{ opacity: 0, y: "100vh", transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    className="ShoppingBag"
                >
                    <h5>Sua sacola de desejos está vazia no momento...</h5>
                    <div className="BagList">
                        <div className="BagItem">
                            <div className="Bag_Item_Left">imagem</div>
                            <div className="Bag_Item_Right">
                                <h2>Product Title</h2>
                                <h3>R$ 420,00</h3>
                                <div className="BagItemFooter">
                                    <div className="QttySelector">
                                        <div className="BtnLeft">-</div>
                                        <div className="QttyValue">8</div>
                                        <div className="BtnRight">+</div>
                                    </div>
                                    <div className="RemoveBtn">X</div>
                                </div>
                            </div>
                        </div>
                        <div className="BagItem">
                            <div className="Bag_Item_Left">imagem</div>
                            <div className="Bag_Item_Right">
                                <h2>Product Title</h2>
                                <h3>R$ 420,00</h3>
                                <div className="BagItemFooter">
                                    <div className="QttySelector">
                                        <div className="BtnLeft">-</div>
                                        <div className="QttyValue">8</div>
                                        <div className="BtnRight">+</div>
                                    </div>
                                    <div className="RemoveBtn">X</div>
                                </div>
                            </div>
                        </div>
                        <div className="BagItem">
                            <div className="Bag_Item_Left">imagem</div>
                            <div className="Bag_Item_Right">
                                <h2>Product Title</h2>
                                <h3>R$ 420,00</h3>
                                <div className="BagItemFooter">
                                    <div className="QttySelector">
                                        <div className="BtnLeft">-</div>
                                        <div className="QttyValue">8</div>
                                        <div className="BtnRight">+</div>
                                    </div>
                                    <div className="RemoveBtn">X</div>
                                </div>
                            </div>
                        </div>
                        <div className="BagItem">
                            <div className="Bag_Item_Left">imagem</div>
                            <div className="Bag_Item_Right">
                                <h2>Product Title</h2>
                                <h3>R$ 420,00</h3>
                                <div className="BagItemFooter">
                                    <div className="QttySelector">
                                        <div className="BtnLeft">-</div>
                                        <div className="QttyValue">8</div>
                                        <div className="BtnRight">+</div>
                                    </div>
                                    <div className="RemoveBtn">X</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BagFooter">
                        <div className="BagItem BagTotal">
                            <div className="BagTotal_Left">
                                <h2>Total</h2>
                            </div>
                            <div className="BagTotal_Right">
                                <h3>R$ 2400,00</h3>
                            </div>
                        </div>
                        <button className="CheckoutBtn CheckoutHelpBtn">Como os pedidos são efetuados?</button>
                        <button className="CheckoutBtn">Finalizar Pedido</button>
                    </div>
                </m.div>
            )}
        </AnimatePresence>
    );
}
