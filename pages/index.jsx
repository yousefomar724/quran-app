import Head from 'next/head'
import QuranPage from '../components/QuranPage'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Quran app test</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <QuranPage />
    </div>
  )
}

export default Home
