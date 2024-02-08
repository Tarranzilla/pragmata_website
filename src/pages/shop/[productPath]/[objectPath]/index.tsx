import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
// ... other imports
import { subproductPaths } from "@/types/WebStructure";

import { motion as m } from "framer-motion";

import { findProductByTranslationKeyWebStruc } from "@/types/WebStructure";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "@/store/slices/cartSlice";
import { setCartOpen } from "@/store/slices/interfaceSlice";
import { RootState } from "@/store/store";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center, AccumulativeShadows, RandomizedLight, Effects, SpotLight, Stage } from "@react-three/drei";
import { Suru } from "@/components/objects3D/Suru";
import { Sur } from "@/components/objects3D/Sur";
import { Sururu } from "@/components/objects3D/Sururu";

import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productPath = params?.productPath;
    const objectPath = params?.objectPath;

    console.log(productPath, objectPath);

    return { props: { productPath, objectPath } };
};

type ObjectPathPageProps = {
    productPath: string;
    objectPath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = subproductPaths.map((subproductPath) => {
        const [productPath, objectPath] = subproductPath.split("/");
        return {
            params: { productPath, objectPath },
        };
    });

    return { paths, fallback: true };
};

const ObjectPathPage: React.FC<ObjectPathPageProps> = ({ productPath, objectPath }) => {
    const tSimple = useSimpleTranslation();

    const dispatch = useDispatch();

    const product = findProductByTranslationKeyWebStruc(objectPath, tSimple);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const quantity = cartItems.find((item) => item.id === objectPath)?.quantity;

    const [contextIsOpen, setContextIsOpen] = useState(false);
    const [materialIsOpen, setMaterialIsOpen] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState("");

    const addToCartAction = (translationKey: string) => {
        const productExistsInCart = quantity && quantity > 0;

        dispatch(addCartItem(translationKey));

        if (!productExistsInCart) {
            dispatch(setCartOpen(true));
        }
    };

    return (
        <>
            <Head>
                <title>{product?.name}</title>
                <meta name="description" content={product?.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Project_Page">
                <div className="object3dCanvas_Container">
                    <div
                        className="object3d_material"
                        onClick={() => {
                            setMaterialIsOpen(!materialIsOpen);
                        }}
                    >
                        <div className="object3d_material_item">
                            <img src="/materialFiles/material_003_plastico.png" className="object3d_material_thumb" />
                            <p className="object3d_material_name">plástico reciclado</p>
                        </div>

                        {materialIsOpen && (
                            <>
                                <div className="object3d_material_item">
                                    <img src="/materialFiles/material_002_compensado.png" className="object3d_material_thumb" />
                                    <p className="object3d_material_name">compensado naval</p>
                                </div>

                                <div className="object3d_material_item">
                                    <img src="/materialFiles/material_001_mdf.png" className="object3d_material_thumb" />
                                    <p className="object3d_material_name">mdf</p>
                                </div>
                            </>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            addToCartAction(objectPath);
                        }}
                        className="AddToCartButton"
                    >
                        {tSimple.common.addToCartBtn} {quantity && quantity > 0 ? `(${quantity})` : ""}{" "}
                    </button>

                    <div className="ImageItem object3dCanvas">
                        <Canvas shadows camera={{ position: [0, 0, 1.5], fov: 35 }} gl={{ antialias: true, preserveDrawingBuffer: true }}>
                            <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

                            <group position={[0, -0.275, 0]}>
                                <Center top>
                                    <Suru rotate_Z={-0.001} />
                                    <Sur x={0} rotate_X={0.01} />
                                    <Sur x={-0.075} rotate_X={-0.01} />
                                    <Sur x={-0.15} rotate_X={0.01} />
                                    <Sur x={0.075} rotate_X={-0.01} />
                                    <Sur x={0.15} rotate_X={0.01} />
                                    <Sururu rotate_Z={0.01} />
                                </Center>
                            </group>
                            <Environment preset="warehouse" background blur={1} />
                        </Canvas>
                    </div>
                </div>
                <p>{product?.description}</p>
                <button
                    className={contextIsOpen ? "Product_Page_ContextButton Active" : "Product_Page_ContextButton"}
                    onClick={() => {
                        setContextIsOpen(!contextIsOpen);
                    }}
                >
                    {tSimple.common.contextBtn}
                </button>
            </m.div>
        </>
    );
};

export default ObjectPathPage;
