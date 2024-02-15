'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {

    const [isLoggin, setIsLogin] = useState(false)
    return (

        <div className='flex text-sm md:text-xl lg:text-2xl font-medium md:justify-between justify-evenly p-6  '>
            <div className='bg-white p-5 text-blue-950 font-bold rounded-full hidden md:block ' >
                Next-14
            </div>
            <div className='justify-center md:block space-x-7 items-center md:justify-end'  >
                <Link className='hover:bg-white shadow-2xl  hover:text-blue-950 hover:p-1 p-1 rounded-2xl' href={'./'} >
                    Home
                </Link>
                <Link className='hover:bg-white shadow-2xl hover:text-blue-950 hover:p-1 p-1 rounded-2xl' href={'./about'} >
                    About
                </Link>
                <Link className='hover:bg-white shadow-2xl hover:text-blue-950 hover:p-1 p-1 rounded-2xl' href={'./contact'} >
                    Contact
                </Link>
                <Link className='hover:bg-white shadow-2xl hover:text-blue-950 hover:p-1 p-1 rounded-2xl' href={'./blog'} >
                    Blog
                </Link>
                <Link className={!isLoggin ? 'hidden' : 'hover:bg-white shadow-2xl hover:text-blue-950 hover:p-1 p-1 rounded-2xl'} href={'./admin'} >
                    Admin
                </Link>
                <Link href={'./login'} >
                    <button onClick={() => {
                        setIsLogin(!isLoggin)
                    }} className='bg-white text-blue-950 p-1 rounded-sm cursor-pointer'>{
                            !isLoggin ? 'Login' : 'Logout'
                        }</button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar