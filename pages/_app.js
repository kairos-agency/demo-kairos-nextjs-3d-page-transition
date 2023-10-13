import '../styles/index.scss'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const mesh = useRef()

    const currentPage = router.pathname.split('/').filter(Boolean).pop() || 'home'

    const pageVariants = {
        home: {
            initial: { rotateX: 0.5, rotateY: 0.5, rotateZ: 0, x: 0 },
            animate: { rotateX: 0.5, rotateY: 0.5, rotateZ: 0, x: 0 },
            exit: { rotateX: 0, rotateY: -1, rotateZ: -1, x: 3 },
        },
        project: {
            initial: { rotateX: 0, rotateY: -1, rotateZ: -1, x: 3 },
            animate: { rotateX: 0, rotateY: -1, rotateZ: -1, x: 3 },
            exit: { rotateX: 0.5, rotateY: 0.5, rotateZ: 0, x: 0 },
        }
    }

    return (
        <AnimatePresence mode='sync'>
            <motion.div key={router.pathname}>
                <Layout>
                    <Component {...pageProps} />

                    <div className='scene'>
                        <Canvas
                            shadows
                            gl={{ alpha: true, stencil: false, depth: false, antialias: true, powerPreference: 'high-performance' }}
                            camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
                        >
                            <ambientLight intensity={3} />
                            <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color='white' castShadow shadow-mapSize={[64, 64]} />

                            <motion.mesh
                                ref={mesh}
                                scale={2.5}
                                receiveShadow
                                castShadow
                                whileHover={{ scale: 2.8 }}
                                initial={pageVariants[currentPage].initial}
                                animate={pageVariants[currentPage].animate}
                                exit={pageVariants[currentPage].exit}
                                transition={{ duration: 0.8, ease: [0.265, 0.84, 0.44, 1] }}
                            >
                                <boxGeometry args={[1, 1, 1]} />
                                <meshNormalMaterial />
                            </motion.mesh>
                        </Canvas>
                    </div>
                </Layout>
            </motion.div>
        </AnimatePresence>
    )
}