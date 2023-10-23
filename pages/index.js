import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <>
            <Head>
                <title>Next.js 3d page transition - Demo Kairos Agency - Home</title>
                <meta name='description' content="Next.js 3d page transition - Demo Kairos Agency - Home." />
            </Head>

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
            </header>
        </>
    )
}