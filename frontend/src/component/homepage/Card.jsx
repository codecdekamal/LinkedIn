import React from 'react'

const Card = ({children}) => {
  return (
    <div >
         <div className='border-gray-400 border-[0.5px]  border-t border-b sm:border-2 min-h-60 min-w-full overflow-hidden  sm:rounded-xl sm:p-2  mt-14 mb-28'>
        {children}
    </div> 
    </div>
  
  )
}

export default Card;
