/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ./public/suru3d/sururu_madeira_1.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Sururu(props) {
    const sururuRef = useRef();
    const { nodes, materials } = useGLTF("/objects3D/sururu_madeira_1.glb");

    useFrame(() => {
        sururuRef.current.rotation.x += props.rotate_Z;
    });

    return (
        <group {...props} dispose={null}>
            <mesh
                ref={sururuRef}
                rotation-x={Math.PI / 2}
                rotation-y={Math.PI / 2}
                position={[0, -0.25, 0]}
                geometry={nodes.Sururu.geometry}
                material={materials.Madeira_Image_Texture}
                scale={0.01}
            />
        </group>
    );
}

useGLTF.preload("./suru3d/sururu_madeira_1.glb");