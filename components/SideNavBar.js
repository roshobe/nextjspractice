import { GiHamburgerMenu, GiBinoculars } from "react-icons/gi";
import { BiSearchAlt, BiHomeAlt, BiCompass } from "react-icons/bi";
import {
  HiOutlineMail,
  HiOutlineClipboardList,
  HiOutlineBookmark,
  HiOutlineBell,
} from "react-icons/hi";
import { RiBookLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { TbWriting } from "react-icons/tb";
import { Disclosure } from "@headlessui/react";
export default function SideNavBar() {
  return (
    <Disclosure as='nav'>
      <Disclosure.Button className='top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-black focus:outline-none focus:ring-2 focus:ring-white group hover:bg-gray-900'>
        <GiHamburgerMenu aria-hidden='true' />
      </Disclosure.Button>

      <div className='p-6 w-1/2 h-screen bg-black fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-300'>
        <div className='flex flex-col justify-start items-center space-y-2'>
          <div className='relative text-gray-600'>
            <button type='submit' className='absolute left-2 top-0 mt-3 mr-4'>
              <BiSearchAlt />
            </button>
            <input
              type='search'
              name='search'
              placeholder='Search'
              className='bg-white h-10 px-7 pr-10 rounded-full text-sm focus:outline-none'
            />
          </div>
          <span class='mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max'>
            <img
              class='rounded-full w-14 h-14 max-w-none'
              alt='A'
              src='https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg'
            />
            <span class='flex items-center px-3 py-2'>John Doe</span>
          </span>
          <div className='my-4 border-b border-gray-100 pb-4'>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <BiHomeAlt className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                Home
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <GiBinoculars className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                Explore
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <BiCompass className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                Discover
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <HiOutlineMail className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                Messages
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <HiOutlineClipboardList className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                List
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <HiOutlineBookmark className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                BookMarks
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <RiBookLine className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                Learn
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <HiOutlineBell className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                Notifications
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <FiSettings className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                Preferences
              </h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4  hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
              <GiBinoculars className='text-2xl text-gray-600 group-hover:text-black' />
              <h3 className='text-base text-cyan-500 group-hover:text-black font-semibold'>
                NSFW filter
              </h3>
            </div>

            <button className='static bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full'>
              <TbWriting className=' text-3xl inline-block px-1  text-white ' />
              Make a Post
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
