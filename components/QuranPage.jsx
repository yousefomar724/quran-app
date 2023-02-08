import { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Text from 'react-svg-text'

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

  let x = 1000
  let y = 100
  let lineHeight = 36
  let maxWidth = 2000

  const wrapText = (ayahs, x, y, maxWidth, lineHeight) => {
    let line = ''
    let lines = []

    ayahs.forEach((aya) => {
      let testLine = line + aya.text + ' '
      let testWidth = (testLine.length * lineHeight) / 2
      if (testWidth > maxWidth) {
        lines.push({ line, x, y })
        line = aya.text + ' '
        y += lineHeight
      } else {
        line = testLine
      }
    })
    lines.push({ line, x, y })
    return lines
  }

  if (quran?.ayahs?.length === 0) <div>Loading...</div>
  return (
    <div>
      <h1 className='font-majeed text-center text-4xl font-bold my-4'>
        Quran Test
      </h1>
      <div className='p-6 my-10 h-[500vh]'>
        {/* {quran?.ayahs?.map((aya, i) => (
          <span
            key={i}
            className='hover:text-gray-900 cursor-pointer text-2xl md:text-3xl rounded-md hover:bg-gray-300 font-majeed'
          >
            <svg className=''>
              <Text
                verticalAnchor='start'
                x='100'
                y='100'
                lineHeight='.5rem'
                scaleToFit={true}
              >
                {aya.text}
              </Text>
              <span className='w-12 h-12 text-xs inline-flex items-center justify-center bg-[url(/separator.svg)] bg-no-repeat bg-[right_-0.1rem_top_-0.3rem] bg-cover'>
                {i + 1}
              </span>
            </svg>
          </span>
        ))} */}
        <svg width='100%' height='100%' className='leading-10'>
          {wrapText(quran?.ayahs, x, y, maxWidth, lineHeight).map(
            ({ line, x, y }, index) => (
              <Fragment key={index}>
                <text
                  x={x}
                  y={y}
                  fontSize={lineHeight}
                  fontFamily='majeed'
                  writing-mode='rl-tb'
                  direction='rtl'
                  onClick={() => console.log('clicked')}
                  className={`hover:fill-red-500`}
                >
                  {line}
                </text>
              </Fragment>
            )
          )}
        </svg>
      </div>
    </div>
  )
}

export default QuranPage
