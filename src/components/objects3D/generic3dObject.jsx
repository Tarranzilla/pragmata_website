import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Model({ modelPath, materialPropertyName, objectScale, customMaterial, ...props }) {
    const objectRef = useRef();
    const { nodes, materials } = useGLTF(modelPath, false);

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
