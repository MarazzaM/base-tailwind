import React, { useState } from 'react'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import Logo from '../../../public/logo.png'

import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const Menus = [
        { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },
        { title: 'Course', path: '/course', src: <SiFuturelearn /> },
        { title: 'Profile', path: '/profile', src: <CgProfile /> },
        { title: 'Signin', path: '/login', src: <SiOpenaccess />, gap: 'true' },
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative h-screen duration-300 bg-white border-r border-gray-200 `}
            >
                <BsArrowLeftCircle
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-16 -right-4 hover:fill-primary`}
                    onClick={() => setOpen(!open)}
                />
                <Link href='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center justify-center`}>
                        <Image width={75} height={75} src={Logo} alt='' className=' p-2' />
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <a href={menu.path} key={index}>
                            <li
                                className={`flex items-center  gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer  hover:bg-gray-200  text-font hover:text-primary ${open ?  'justify-start' :  'justify-center'} `}>
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
