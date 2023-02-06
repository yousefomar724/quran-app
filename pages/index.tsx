import type { NextPage } from 'next'
import Head from 'next/head'
import QuranPage from '../components/QuranPage'

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <QuranPage />
    </div>
  )
}

export default Home
