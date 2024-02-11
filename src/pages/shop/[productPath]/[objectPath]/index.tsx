import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
// ... other imports
import { Material, subproductPaths } from "@/types/WebStructure";

import { motion as m } from "framer-motion";

import { findProductByTranslationKeyWebStruc } from "@/types/WebStructure";

import { useSimpleTranslation } from "@/international/useSimpleTranslation";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "@/store/slices/cartSlice";
import { setCartOpen } from "@/store/slices/interfaceSlice";
import { RootState } from "@/store/store";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center } from "@react-three/drei";
import { Generic3dObject } from "@/components/objects3D/generic3dObject";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";

import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productPath = params?.productPath;
    const objectPath = params?.objectPath;
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

    const baseMaterial = {
        key: "wood",
        name: tSimple.common.materialNames.default,
        thumb: "/materials/wood.jpg",
        materialPropertyName: "wood",
    };

    const availableMaterials = product?.availableMaterials || [];
    const initialMaterial = availableMaterials[0] || baseMaterial;
    const [selectedMaterial, setSelectedMaterial] = useState(initialMaterial);
    const [selectedMaterialProperty, setSelectedMaterialProperty] = useState(initialMaterial ? initialMaterial.materialPropertyName : null);

    const quantity = cartItems.find((item) => item.id === objectPath && item.variant.key === selectedMaterial.key)?.quantity;

    const [materialIsOpen, setMaterialIsOpen] = useState(false);

    const handleMaterialClick = (material: Material) => {
        setSelectedMaterial(material);
        setMaterialIsOpen(false);
    };

    type MaterialTypes = "wood" | "mdf" | "plastic";

    type CustomMaterials = {
        [key: string]: MeshStandardMaterial;
    };

    const textureLoader = typeof window !== "undefined" ? new THREE.TextureLoader() : null;

    const customMaterials: CustomMaterials = {
        wood: new THREE.MeshStandardMaterial({
            map: textureLoader ? textureLoader.load("/materialFiles/texturas/compensado_colorMap.jpg") : undefined,
        }),
        mdf: new THREE.MeshStandardMaterial({
            map: textureLoader ? textureLoader.load("/materialFiles/material_001_mdf.png") : undefined,
        }),
        plastic: new THREE.MeshStandardMaterial({
            map: textureLoader ? textureLoader.load("/materialFiles/material_003_plastico.png") : undefined,
        }),
    };

    const [contextIsOpen, setContextIsOpen] = useState(false);

    const addToCartAction = (translationKey: string) => {
        const productExistsInCart = quantity && quantity > 0;

        dispatch(addCartItem({ cartItemId: translationKey, variant: { key: selectedMaterial.key, name: selectedMaterial.name } }));

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
                    {availableMaterials.length > 0 && (
                        <div className="object3d_material" onClick={() => setMaterialIsOpen(!materialIsOpen)}>
                            {materialIsOpen ? (
                                availableMaterials.map((material, index) => (
                                    <div key={index} className="object3d_material_item" onClick={() => handleMaterialClick(material)}>
                                        <img src={material.thumb} className="object3d_material_thumb" />
                                        <p className="object3d_material_name">{material.name}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="object3d_material_item">
                                    <img src={selectedMaterial.thumb} className="object3d_material_thumb" />
                                    <p className="object3d_material_name">{selectedMaterial.name}</p>
                                </div>
                            )}
                        </div>
                    )}
                    <button
                        onClick={() => {
                            addToCartAction(objectPath);
                        }}
                        className="AddToCartButton"
                    >
                        {tSimple.common.addToCartBtn} {quantity && quantity > 0 ? `(${quantity})` : ""}{" "}
                    </button>

                    <div className="ImageItem object3dCanvas">
                        <Canvas shadows camera={{ position: [0, 0, 0.5], fov: 35 }} gl={{ antialias: true, preserveDrawingBuffer: true }}>
                            <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

                            <group position={[0, 0, 0]}>
                                <Center>
                                    <Generic3dObject
                                        modelPath={product?.object3dPath}
                                        geometryName={product?.geometryName}
                                        geometryScale={product?.geometryScale}
                                        customPosition={[0, 0, 0]}
                                        materialPropertyName={selectedMaterial ? selectedMaterialProperty : undefined}
                                        customMaterial={customMaterials[selectedMaterial?.key]}
                                        rotate_Z={-0.001}
                                        objectScale={product?.objectScale || [0.01]}
                                    />
                                </Center>
                            </group>
                            <Environment preset="forest" background blur={1} />
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
