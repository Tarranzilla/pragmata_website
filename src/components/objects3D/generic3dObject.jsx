import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Model({ modelPath, materialPropertyName, objectScale, customMaterial, rotate_Z, ...props }) {
    const groupRef = useRef();
    const { nodes } = useGLTF(modelPath, false);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += rotate_Z;
        }
    });

    return (
        <group ref={groupRef} {...props}>
            {Object.entries(nodes).map(([name, node]) => {
                if (node.isMesh) {
                    return <mesh key={name} geometry={node.geometry} material={customMaterial} scale={objectScale} />;
                }
                return null;
            })}
        </group>
    );
}

export function Generic3dObject(props) {
    const objectRef = useRef();

    if (!props.modelPath) {
        // Render a box of color #ffb800 if there's no valid model path
        return (
            <mesh ref={objectRef} {...props} scale={0.1}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" color={new THREE.Color("#ffb800")} />
            </mesh>
        );
    }

    return <Model {...props} />;
}
