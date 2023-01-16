import type { ReactElement } from 'react'
import Layout from '@/components/layouts/Clean'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'

import Hero from '@/components/ui/Landing/Hero'


const Page: NextPageWithLayout = () => {
  return (
    <div className='bg-hero bg-center bg-cover h-full min-h-screen flex justify-center items-center-'>
     <Hero />
    </div>
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