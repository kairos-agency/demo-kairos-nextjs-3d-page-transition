import '../styles/index.scss'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import Scene from '../components/Scene'

export default function App({ Component, pageProps }) {
    const router = useRouter()

    const currentPage = router.pathname.split('/').filter(Boolean).pop() || 'home'

    return (
        <AnimatePresence mode='sync'>
            <motion.div key={router.pathname}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </motion.div>

            <Scene page={currentPage} />
        </AnimatePresence>
    )
}