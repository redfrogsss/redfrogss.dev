import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import Dance from "./Dance";

export default function DanceCanvas() {

    return (
        <Suspense fallback={<span class="text-white">loading...</span>}>
            <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    backgroundColor: '#0f172a',
                    width: '100%',
                    height: '100vh',
                }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                <Suspense fallback={null}>
                    <Dance position={[0.025, -0.9, 0]} />
                </Suspense>
                {/* <OrbitControls /> */}
            </Canvas>
        </Suspense>
    );
}