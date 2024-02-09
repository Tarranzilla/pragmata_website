import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Generic3dObject({ modelPath, materialPropertyName, objectScale, customMaterial, ...props }) {
    const objectRef = useRef();
    let nodes, materials;

    let gltf;
    if (modelPath) {
        gltf = useGLTF(modelPath, false);
        ({ nodes, materials } = gltf);
    }

    useFrame(() => {
        if (objectRef.current) {
            objectRef.current.rotation.z += props.rotate_Z;
        }
    });

    useEffect(() => {
        if (objectRef.current) {
            objectRef.current.geometry.center();
        }
    }, [objectRef]);

    if (!nodes || !materials) {
        // Render a box of color #ffb800 if there's no valid model path
        return (
            <mesh ref={objectRef} {...props} scale={0.5}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" color={new THREE.Color("#ffb800")} />
            </mesh>
        );
    }

    return (
        <group {...props} dispose={null}>
            <mesh
                ref={objectRef}
                geometry={nodes[props.geometryName].geometry}
                material={customMaterial}
                rotation={[Math.PI / 2, 0, 0]}
                scale={objectScale}
            />
        </group>
    );
}
