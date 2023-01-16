import type { ReactElement } from 'react'
import Layout from '@/components/layouts/Clean'
import type { NextPageWithLayout } from '../../_app'

const Page: NextPageWithLayout = () => {
    return (
      <>

    <div className='bg-fuse h-full min-h-screen'>

  </div>

    <div className=''>
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