"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Image from 'next/image';

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
                            <h1 className={`px-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-2xl font-bold underline underline-offset-8 decoration-rose-500 decoration-1`} aria-label="Jeimmy Lopez Vega">JeimmyLV</h1>
                        </Link>
                        <div className="block aspect-square lg:hidden">
                            <button className="p-2 text-white outline-none text-3xl focus:border focus:border-teal-400" aria-label='Open or Close Navbar'
                                onClick={() => setNavbar(!navbar)}>
                                {navbar ? (
                                    <Image src="/images/bars-solid.svg" width={20} height={20}  alt='menu' title='close' className='invert brightness-75' />
                                ) : (
                                    <Image src="/images/bars-solid.svg" width={20} height={20}  alt='menu' title='close' className='invert brightness-75' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`pb-2 overflow-y-scroll lg:overflow-y-visible lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-2 lg:p-0 block' : 'hidden'}`}>
                        <ul className="h-[82vh] items-center justify-center overflow-y-scroll md:h-screen lg:overflow-y-visible lg:h-auto lg:flex lg:gap-1">
                            <li className={"py-3 text-base text-white text-start border-b-2 border-white border-opacity-20 pl-0 hover:text-teal-400 hover:underline hover:underline-offset-8 lg:py-1 lg:px-4 lg:font-medium lg:text-lg lg:border-b-0"}>
                                <Link href="/" onClick={() => setNavbar(!navbar)} className={pathname == '/' ? 'text-teal-500' : ''}>
                                    Empleados
                                </Link>
                            </li>
                            <li className="py-3 text-base text-white text-start border-b-2 border-white border-opacity-20 pl-0 hover:text-teal-400 hover:underline hover:underline-offset-8 lg:py-1 lg:px-4 lg:font-medium lg:text-lg lg:border-b-0">
                                <Link href="/departamento" onClick={() => setNavbar(!navbar)} className={pathname == '/departamento' ? 'text-teal-400' : ''}>
                                    Departamentos
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
