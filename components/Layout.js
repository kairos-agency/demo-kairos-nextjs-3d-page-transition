import { Inter } from 'next/font/google'
import { ReactLenis } from '@studio-freight/react-lenis'
import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
    return (
        <ReactLenis root>
            <main className={inter.className}>
                <div className='info-top'>
                    <Image src='/images/logo-kairos.svg' width={80} height={14} alt='Logo Kairos Agency.' />
                    <p>next.js 3d page transition</p>
                </div>

                <div className='info-bottom'>
                    <p>October 23, 2023</p>
                </div>

                {children}

                <Analytics />
            </main>
        </ReactLenis>
    )
}