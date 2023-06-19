import { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

function BackDrop() {
    const shadows = useRef();

    return (
        <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85}
            position={[0, 0, -0.14]} scale={10} rotation={[Math.PI / 2, 0, 0]}>
            <RandomizedLight amount={4} radius={9} intensity={0.55} position={[5, 5, -10]} ambient={0.25} />
            <RandomizedLight amount={4} radius={5} intensity={0.25} position={[-5, 5, -9]} ambient={0.55} />
        </AccumulativeShadows>
    );
}

export default BackDrop;
