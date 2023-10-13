import { motion } from "framer-motion-3d"
import { Canvas } from '@react-three/fiber'

export default function SceneHome() {
    return (
        <>
            <div className='scene'>
                <Canvas
                    shadows
                    gl={{ alpha: true, stencil: false, depth: false, antialias: true, powerPreference: 'high-performance' }}
                    camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
                >
                    <ambientLight intensity={2} />
                    <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color='white' castShadow shadow-mapSize={[64, 64]} />

                    <motion.mesh
                        scale={4}
                        receiveShadow
                        castShadow
                        initial={{ rotateX: 1, rotateY: 1, rotateZ: 0 }}
                        animate={{ rotateX: 1, rotateY: 1, rotateZ: 0 }}
                        exit={{ rotateX: 0, rotateY: 1, rotateZ: 1 }}
                        transition={{ duration: 0.5, ease: [0.265, 0.84, 0.44, 1] }}
                    >
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color='#fff' />
                    </motion.mesh>
                </Canvas>
            </div>
        </>
    )
}