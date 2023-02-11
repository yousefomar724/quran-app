import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MdNote } from 'react-icons/md'
import {
  BsBookFill,
  BsCheck,
  BsFillBookmarkFill,
  BsFillShareFill,
  BsHeadphones,
  BsPauseFill,
  BsPlayFill,
  BsTextareaResize,
} from 'react-icons/bs'
import { useAudio } from '../hooks'

const AyaActions = ({ index, setValue, line }) => {
  const [playing, toggle] = useAudio(line.audio)
  return (
    <Menu as='div' className='inline-block z-4 mx-4'>
      <Menu.Button className='inline' onClick={() => setValue(index)}>
        <span className='w-10 h-10 text-center text-[0.65rem] inline-flex items-center justify-center bg-[url(/separator.svg)] bg-no-repeat bg-[right_-0.1rem_top_-0.2rem] bg-cover'>
          {line.numberInSurah.toLocaleString('ar-SA')}
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-[50%] translate-x-[-50%] w-[90%] mx-auto z-50 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex items-center justify-between'>
          <Menu.Item
            as='div'
            className='text-gray-700 w-full hover:bg-gray-200 flex-col py-1 flex items-center justify-center gap-2 cursor-pointer'
          >
            <BsFillBookmarkFill className='text-lg' />
            <p className='text-xs'>علامة</p>
          </Menu.Item>
          <Menu.Item
            as='div'
            className='text-gray-700 w-full hover:bg-gray-200 flex-col py-1 flex items-center justify-center gap-2 cursor-pointer'
          >
            <BsFillShareFill className='text-lg' />
            <p className='text-xs'>مشاركة</p>
          </Menu.Item>
          <Menu.Item
            as='div'
            onClick={toggle}
            className='text-gray-700 w-full hover:bg-gray-200 flex items-center justify-center gap-0.5 flex-col cursor-pointer'
          >
            {playing ? (
              <BsPauseFill className='text-lg' />
            ) : (
              <BsPlayFill className='text-lg' />
            )}
            <p className='text-xs'>استماع</p>
          </Menu.Item>
          <Menu.Item
            as='div'
            className='text-gray-700 w-full hover:bg-gray-200 flex-col py-1 flex items-center justify-center gap-2 cursor-pointer'
          >
            <BsCheck className='text-lg' />
            <p className='text-xs'>حفظ</p>
          </Menu.Item>
          <Menu.Item
            as='div'
            className='text-gray-700 w-full hover:bg-gray-200 flex-col py-1 flex items-center justify-center gap-2 cursor-pointer'
          >
            <BsTextareaResize className='text-lg' />
            <p className='text-xs'>خاطرة</p>
          </Menu.Item>
          <Menu.Item
            as='div'
            className='text-gray-700 w-full hover:bg-gray-200 flex-col py-1 flex items-center justify-center gap-2 cursor-pointer'
          >
            <BsBookFill className='text-lg' />
            <p className='text-xs'>تفسير</p>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default AyaActions
