"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  const closeNavbar = () => {
    setNavbar(false);
  };

    return (
        <nav className="w-full bg-[#0D0D0D] fixed top-0 left-0 right-0 z-10 py-2">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:flex lg:items-center  lg:px-8">
                <div>
                    <div className="flex items-center justify-between py-1 lg:py-5 lg:block">
                        <Link href="/">
                            <h1 className={`px-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-400 text-2xl font-bold underline underline-offset-8 decoration-rose-500 decoration-1`} aria-label="Jeimmy Lopez Vega">JeimmyLV</h1>
                        </Link>
                        <div className="block aspect-square lg:hidden">
                            <button className="p-2 text-white outline-none text-3xl focus:border focus:border-rose-600" aria-label='Open or Close Navbar'
                                onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <FontAwesomeIcon icon={faXmark} className='text-white' title='Close Menu' />
                                ) : (
                                    <FontAwesomeIcon icon={faBars} className='text-white' title='Open Menu' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`pb-2 overflow-y-scroll lg:overflow-y-visible lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-2 lg:p-0 block' : 'hidden'}`}>
                        <ul className="h-[82vh] items-center justify-center overflow-y-scroll md:h-screen lg:overflow-y-visible lg:h-auto lg:flex lg:gap-1">
                            <li className={"py-3 text-base text-white text-start border-b-2 border-white border-opacity-20 pl-0 hover:text-rose-600 hover:underline hover:underline-offset-8 lg:py-1 lg:px-4 lg:font-medium lg:text-lg lg:border-b-0"}>
                                <Link href="/" onClick={() => setNavbar(!navbar)} className={pathname == '/' ? 'text-rose-600' : ''}>
                                    Home
                                </Link>
                            </li>
                            <li className="py-3 text-base text-white text-start border-b-2 border-white border-opacity-20 pl-0 hover:text-rose-600 hover:underline hover:underline-offset-8 lg:py-1 lg:px-4 lg:font-medium lg:text-lg lg:border-b-0">
                                <Link href="/projects" onClick={() => setNavbar(!navbar)} className={pathname == '/projects' ? 'text-rose-600' : ''}>
                                    Projects
                                </Link>
                            </li>
                            <li className={`py-3 text-base text-white text-start border-b-2 border-white border-opacity-20 pl-0 lg:py-1 lg:px-4 lg:font-medium lg:text-lg lg:border-2 lg:text-white lg:border-rose-600 lg:rounded-xl lg:ml-2 lg:hover:bg-rose-600 ${pathname == '/contact' ? 'text-rose-600 lg:bg-rose-600 lg:text-black' : ''}`}>
                                <Link href="/contact" onClick={() => setNavbar(!navbar)} >
                                    Contact
                                </Link>
                            </li>
                            <li className="py-3 text-2xl text-white text-start border-b-2 border-white border-opacity-20 pl-0 hover:text-rose-600 lg:py-1 lg:pl-4 lg:border-b-0 lg:hover:scale-125">
                                <Link href="https://github.com/Jeim05/" title="Visit my GitHub profile" onClick={() => setNavbar(!navbar)} target='_blank'>
                                    <FontAwesomeIcon icon={faGithub} className='aspect-square w-6 h-6' />
                                </Link>
                            </li>
                            <li className="py-3 text-2xl text-white text-start border-b-2 border-white border-opacity-20 pl-0 hover:text-rose-600 lg:py-1 lg:px-2 lg:border-b-0 lg:hover:scale-125">
                                <Link href="https://www.linkedin.com/in/jeimmylopezvega05/" title="Contact me by LinkedIn" onClick={() => setNavbar(!navbar)} target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin} className='aspect-square w-6 h-6' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
