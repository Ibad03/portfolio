import React from 'react'

const Heading = (props) => {
  return (
    <div className='flex flex-col justify-center items-center py-15 items-center justify-center'>
      <h1 className='font-bold text-3xl text-white sm:text-4xl '>{props.heading}</h1>
      <span className='w-24 h-1 mt-2 ml-16 bg-[#7b2cbf]'></span>
    </div>
  )
}

export default Heading
