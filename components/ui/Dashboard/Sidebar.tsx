import React, { useState } from 'react'


import { ChartPieIcon } from '@heroicons/react/24/outline'
import {TableCellsIcon} from '@heroicons/react/24/outline'
import {UserCircleIcon} from '@heroicons/react/24/outline'
import {LockOpenIcon} from '@heroicons/react/24/outline'
import {ArrowLeftCircleIcon} from '@heroicons/react/24/outline'

import Logo from '../../../public/logo.png'
//next imports
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter();
    const currentRoute = router.pathname;

    const Menus = [
        { title: 'Dashboard', path: '/Dashboard', src: <ChartPieIcon className="h-6 w-6" aria-hidden="true" /> },
        { title: 'Tablas', path: '/Tablas', src: <TableCellsIcon className="h-6 w-6" aria-hidden="true" /> },
        { title: 'Config', path: '/Configuration', src: <UserCircleIcon className="h-6 w-6" aria-hidden="true"  /> },
        { title: 'Cerrar sesión', path: '/', src: <LockOpenIcon   className="h-6 w-6" aria-hidden="true" />, gap: 'true' },
    ]

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit '
                }  sm:block relative h-screen ease-in-out duration-300	 bg-white border-r border-gray-200 `}
            >
                <ArrowLeftCircleIcon
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white   rounded-full cursor-pointer top-16 -right-4 hover:fill-primary transition-all duration-700 h-8 w-8`}
                    onClick={() => setOpen(!open)}
                />
                <Link href='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center justify-center`}>
                        <Image width={75} height={75} src={Logo} alt='' className=' p-2' />
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link href={menu.path} key={index}>
                            <li
                                className={`flex items-center  gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer  hover:bg-gray-200  text-font hover:text-primary ${open ?  'justify-start' :  'justify-center'} ${currentRoute === `${menu.path}` ? 'text-primary' : ''} `}>
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
