import type { ReactElement } from 'react'
import Layout from '@/components/layouts/Dashboard'
import type { NextPageWithLayout } from '../_app'

const Page: NextPageWithLayout = () => {
    return (
      <div>
        Tablas
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