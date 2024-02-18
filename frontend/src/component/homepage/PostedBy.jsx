import React from 'react'
const PostedBy = () => {
  return (
    <>
    <div className='flex flex-row justify-between p-2 items-center font-sans'>
    <div className='flex flex-row justify-center items-center gap-5'>
        <div className='h-10 w-10 rounded-full'>
            <img src="" alt="" className='h-10 w-10 rounded-full'/>
        </div>
        <div>
            <h1 >AlgoTwiter</h1>
            <div className='font-extralight text-sm'> 2323 followers</div>
            <time className='font-extralight text-sm'>5h ago</time>
        </div>
    </div>
    <div className='capitalize text-sky-500 font-serif  mr-5  '>
        <span className='text-2xl '>+</span>
        <span className='ml-2 '>follow</span>
    </div>
    </div>
   </>
  )
}

export default PostedBy
