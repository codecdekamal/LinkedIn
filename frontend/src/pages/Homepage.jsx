import React from 'react'
import Header from '../component/homepage/Header'
import HomePageProfile from '../component/homepage/HomePageProfile'
import Post from '../component/homepage/Post'
export const HomePage = () => {
  return (
    <div className='bg-linkedIn-blue min-h-screen sm:px-2 '>
     <Header/>
     <HomePageProfile/>
     <Post/>
    </div>
  )
}

