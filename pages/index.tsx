import type { ReactElement } from 'react'
import Layout from '@/components/layouts/Dashboard'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
    <h1 className='text-4xl mb-5 font-bold'>Home</h1>
    <span className='text-7xl'>🏡</span>
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