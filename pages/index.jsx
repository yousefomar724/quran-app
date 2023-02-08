import Head from 'next/head'
import QuranPage from '../components/QuranPage'
import Text from 'react-svg-text'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <QuranPage />
    </div>
  )
}

export default Home
