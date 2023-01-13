import type { ReactElement } from 'react'
//importar layout que corresponda
import Layout from '@/components/layouts/Clean'
import type { NextPageWithLayout } from '../_app'

const Page: NextPageWithLayout = () => {
    return (
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, minima.
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