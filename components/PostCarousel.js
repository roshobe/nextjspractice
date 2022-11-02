import React from "react";

function PostCarousel() {
  return (
    <div className='mt-3 flex space-x-3'>
      <div className='p-1 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full'>
        <img
          className='inline-block h-20 w-20 rounded-full '
          src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
      </div>

      <div className='p-1 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full'>
        <img
          className='inline-block h-20 w-20 rounded-full'
          src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
      </div>

      <div className='p-1 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full'>
        <img
          className='inline-block h-20 w-20 rounded-full'
          src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
          alt=''
        />
      </div>

      <div className='p-1 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full'>
        <img
          className='inline-block h-20 w-20 rounded-full '
          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
      </div>

      <div className='p-1 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full'>
        <img
          className='inline-blockh-20 w-20 rounded-full '
          src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
      </div>
    </div>
  );
}

export default PostCarousel;
