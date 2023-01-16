import type { ReactElement } from 'react'
import Layout from '@/components/layouts/Clean'
import type { NextPageWithLayout } from '../../_app'

import Image from 'next/image'
import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Logo from '../../../public/logo.png'

const Page: NextPageWithLayout = () => {
  return (
    <>

      <div className='bg-fuse h-full min-h-screen flex  md:items-center items-start justify-center'>
      <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link href='/'><Image alt="logo pequeño" width={100} height={100} src={Logo} className="mx-auto h-16 w-auto"/></Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Entra a tu cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/Login/Register" className="font-medium text-primary hover:text-secondary">
               registra una nueva cuenta
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Dirección de email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-font placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="johndoe@timbo.com.ar"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-font placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
           

              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-secondary">
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-font group-hover:text-font-secondary" aria-hidden="true" />
                </span>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
      </div>

    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page