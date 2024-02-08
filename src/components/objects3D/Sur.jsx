/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ./public/suru3d/sur_madeira_1.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Sur(props) {
    const surRef = useRef();
    const { nodes, materials } = useGLTF("/objects3D/sur_madeira_1.glb");

    useFrame(() => {
        surRef.current.rotation.x += props.rotate_X;
    });
    return (
        <group {...props} dispose={null}>
            <mesh
                ref={surRef}
                rotation-x={Math.PI / 2}
                rotation-y={Math.PI / 2}
                position={[props.x, 0.25, 0]}
                geometry={nodes.Sur.geometry}
                material={materials.Madeira_Image_Texture}
                scale={0.01}
            />
        </group>
    );
}

useGLTF.preload("./suru3d/sur_madeira_1.glb");

/*

export function Sur({ modelPath, ...props }) {
    const surRef = useRef();
    const { nodes, materials } = useGLTF(modelPath);

    useFrame(() => {
        surRef.current.rotation.x += props.rotate_X;
    });
    return (
        <group {...props} dispose={null}>
            <mesh
                ref={surRef}
                rotation-x={Math.PI / 2}
                rotation-y={Math.PI / 2}
                position={[props.x, 0.25, 0]}
                geometry={nodes.Sur.geometry}
                material={materials.Madeira_Image_Texture}
                scale={0.01}
            />
        </group>
    );
}

*/
