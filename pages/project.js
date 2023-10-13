import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Project() {
    return (
        <>
            <header className='hero'>
                <div className='grid'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.265, 0.84, 0.44, 1] }}
                    >
                        <h1>Projects</h1>
                    </motion.div>
                    <Link href='/'>Change page</Link>
                </div>
            </header>
        </>
    )
}