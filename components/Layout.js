import { Inter } from 'next/font/google'
import { ReactLenis } from '@studio-freight/react-lenis'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
    return (
        <ReactLenis root>
            <main className={inter.className}>
                <div className='info-top'>
                    <Image src='/images/logo-kairos.svg' width={105} height={19} alt='Logo Kairos Agency.' />
                    <p>next.js_3d_page_transition</p>
                </div>

                <div className='info-bottom'>
                    <p>13_octobre_2023</p>
                </div>

                {children}
            </main>
        </ReactLenis>
    )
}