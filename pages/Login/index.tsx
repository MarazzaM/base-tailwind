import type { ReactElement } from 'react'
import Layout from '@/components/layouts/Clean'
import type { NextPageWithLayout } from '../_app'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {
    return <div>
    <Link href='/Dashboard'>ir a home</Link>
  </div>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
     {page}
    </Layout>
  )
}

export default Page