import { useEffect, useState } from 'react'
import { useAudio } from '../hooks'
import AyaActions from './AyaActions'

const QuranPage = () => {
  const [quran, setQuran] = useState([])
  const [value, setValue] = useState(0)
  // const [playing, toggle] = useAudio()
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

  let x = 0
  let y = 100
  let lineHeight = 36
  let maxWidth = 2000

  const wrapText = (ayahs, x, y, maxWidth, lineHeight) => {
    let line = {}
    let lines = []

    ayahs?.forEach((aya) => {
      line = aya
      let testLine = line.text + aya.text + ' '
      let testWidth = (testLine.length * lineHeight) / 2
      if (testWidth > maxWidth) {
        lines.push({ line, x, y })
        line.text = aya.text + ' '
        y += lineHeight
      } else {
        line.text = testLine
      }
    })
    return lines
  }

  if (quran?.ayahs?.length === 0) <div>Loading...</div>
  return (
    <div className='h-screen w-full'>
      <div className='w-[440px] mx-auto'>
        <svg
          width='100%'
          height='100%'
          className='leading-10 text-justify min-h-screen p-2'
        >
          <foreignObject width='100%' height='100%' direction='rtl'>
            {wrapText(quran?.ayahs, x, y, maxWidth, lineHeight).map(
              ({ line }, index) => (
                <span key={index}>
                  <span
                    xmlns='http://www.w3.org/1999/xhtml'
                    onClick={() => setValue(index)}
                    className={`text-2xl w-full font-majeed text-center select-none ${
                      value === index ? 'bg-gray-300' : ''
                    }`}
                  >
                    {line.text}
                  </span>
                  <AyaActions
                    setValue={setValue}
                    line={line}
                    value={value}
                    index={index}
                  />
                </span>
              )
            )}
          </foreignObject>
        </svg>
      </div>
    </div>
  )
}

export default QuranPage
