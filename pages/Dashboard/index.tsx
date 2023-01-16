import type { ReactElement } from 'react'
import Layout from '@/components/layouts/Dashboard'
import type { NextPageWithLayout } from '../_app'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {
    return (
      <div>
        Página principal dashboard
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