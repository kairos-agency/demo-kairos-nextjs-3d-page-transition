import { motion } from 'framer-motion-3d'
import { Canvas } from '@react-three/fiber'

export default function Scene({ page }) {
    const pageVariants = {
        home: {
            initial: { rotateX: 0.5, rotateY: 0.5, rotateZ: 0, x: 0 },
            animate: { rotateX: 0.5, rotateY: 0.5, rotateZ: 0, x: 0 },
            exit: { rotateX: 0, rotateY: -1, rotateZ: -1, x: 3 },
            light: 0
        },
        project: {
            initial: { rotateX: 0, rotateY: -1, rotateZ: -1, x: 3 },
            animate: { rotateX: 0, rotateY: -1, rotateZ: -1, x: 3 },
            exit: { rotateX: 0.5, rotateY: 0.5, rotateZ: 0, x: 0 },
            light: 10
        }
    }

    return (
        <div className='scene'>
            <Canvas
                shadows
                gl={{ alpha: true, stencil: false, depth: false, antialias: true, powerPreference: 'high-performance' }}
                camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
            >
                <ambientLight intensity={1} />

                {pageVariants[page] && (
                    <>
                        <motion.pointLight
                            position={[pageVariants[page].light, 10, 0]}
                            intensity={500}
                            animate={{ x: pageVariants[page].light }}
                            transition={{ duration: 1.6, ease: [0.265, 0.84, 0.44, 1] }}
                        />

                        <motion.mesh
                            scale={2.5}
                            receiveShadow
                            castShadow
                            whileHover={{ scale: 2.8 }}
                            initial={pageVariants[page].initial}
                            animate={pageVariants[page].animate}
                            exit={pageVariants[page].exit}
                            transition={{ duration: 0.8, ease: [0.265, 0.84, 0.44, 1], delay: 0.1 }}
                        >
                            <boxGeometry args={[1, 1, 1]} />
                            <meshPhongMaterial color="#080808" roughness={0} clearcoatRoughness={0} />
                        </motion.mesh>

                        <motion.mesh
                            scale={1}
                            position={[0, 3, 0]}
                            receiveShadow
                            castShadow
                            whileHover={{ scale: 1.3 }}
                            initial={pageVariants[page].initial}
                            animate={pageVariants[page].animate}
                            exit={pageVariants[page].exit}
                            transition={{ duration: 0.8, ease: [0.265, 0.84, 0.44, 1] }}
                        >
                            <boxGeometry args={[1, 1, 1]} />
                            <meshPhongMaterial color="#080808" roughness={0} clearcoatRoughness={0} />
                        </motion.mesh>
                    </>
                )}
            </Canvas>
        </div>
    )
}

