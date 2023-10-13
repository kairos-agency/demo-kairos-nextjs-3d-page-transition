import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <>
            <header className='hero'>
                <div className='grid'>

                    <Link href='/project'>Change page</Link>
                </div>
            </header>
        </>
    )
}