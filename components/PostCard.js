import React from "react";
import { BiHeart } from "react-icons/bi";

import { BsChatSquareText } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import { SlShareAlt } from "react-icons/sl";
import { FiSend } from "react-icons/fi";
import { TbDots } from "react-icons/tb";

function PostCard() {
  return (
    <div className='flex flex-col justify-center shadow-2xl bg-gray-600 pb-10 p-x-2 rounded-[30px] pr-10'>
      <div className='flex flex-row space-x-72 pt-3 pl-3    overflow-hidden  justify-start'>
        <div className='flex flex-row space-x-5  pt-3 pl-3    overflow-hidden  justify-start'>
          <img
            className='inline h-20 w-20 rounded-full '
            src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
          />
          <div className='block'>
            Lastly, using the property <span className='block'> </span>
            will put the element on its own line and fill its parent.
          </div>
        </div>
        <TbDots className='text-3xl text-blue-200 hover:text-black justify-self-end' />
      </div>

      <div className='flex flex-row space-x-16 items-end  pl-40 justify-start'>
        <button className='space-x-2 '>
          <BiHeart className='inline-block text-2xl text-blue-200 hover:text-black'></BiHeart>
          <div className='font-bold inline text-xl align-bottom'>1</div>
        </button>
        <BsChatSquareText className='text-xl text-blue-200 hover:text-black' />
        <BiBookmark className='text-xl text-blue-200 hover:text-black' />
        <SlShareAlt className='text-xl text-blue-200 hover:text-black' />
        <FiSend className='text-xl text-blue-200 hover:text-black' />
      </div>
    </div>
  );
}

export default PostCard;
