import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <>
            <header className='hero hero-home'>
                <div className='grid'>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.4, ease: [0.265, 0.84, 0.44, 1] }}
                    >
                        <h1>Homepage</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.265, 0.84, 0.44, 1] }}
                    >
                        <Link href='/project'>See projects</Link>
                    </motion.div>
                </div>
            </header >
        </>
    )
}