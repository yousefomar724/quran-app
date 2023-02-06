import { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const QuranPage = () => {
  const [quran, setQuran] = useState([])
  const fetchData = async () => {
    const response = await fetch(
      'https://api.alquran.cloud/v1/page/5/ar.alafasy'
    )
    const { data } = await response.json()
    setQuran(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(quran)
  if (quran?.ayahs?.length === 0) <div>Loading...</div>
  return (
    <div dir='rtl' className='h-[500vh] overflow-hidden'>
      <h1 className='font-majeed text-center text-4xl font-bold my-4'>
        Quran Test
      </h1>
      <div className='bg-[url(/frame.svg)] bg-no-repeat w-full mx-auto bg-cover p-6'>
        <div className='m-40 text-center'>
          {quran?.ayahs?.map((aya, i) => (
            <span
              key={i}
              className='hover:text-gray-900 cursor-pointer text-[72px] text-center leading-[8.5rem] p-0.5 rounded-md hover:bg-gray-300 font-majeed'
            >
              {aya.text}
              <span className='w-12 h-12 text-xs inline-flex items-center justify-center bg-[url(/separator.svg)] bg-no-repeat bg-[right_-0.1rem_top_-0.3rem] bg-cover'>
                {i + 1}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuranPage
