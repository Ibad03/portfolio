import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[80%] mx-auto pt-40 sm:pt-45 h-fit md:min-h-[100vh]'>
      
      {/* Content  */}

      <div className=''>
        <h1 className='text-[#e019bc]  font-bold text-2xl sm:text-4xl lg:text-5xl'>Hello! I Am Ibad Ahmed</h1>
      <span className='text-white   font-bold text-lg sm:text-2xl'>Frontend Developer...</span>
      <p className='text-white mt-5 sm:mt-8 sm:max-w-[80%] lg:max-w-[70%]'>I  build <span className='text-[#7b2cbf] font-bold'>clean, responsive, and fast</span> web interfaces. 
      Passionate about React, javaScript, and turning design into pixel-perfect uls. Currently 
      Seeking a <span className='text-[#7b2cbf] font-bold'>Frontend Internship</span> to grow and contribute to a real product.</p>

<div className='mt-13 sm:mt-16 flex gap-5'>
    <button className='bg-[#7b2cbf] py-2 px-2 font-medium rounded-b-2xl rounded-tl-2xl hover:text-black  text-white min-w-30'><a href="https://github.com/Ibad03/portfolio">Get Code</a></button>
    <button className='bg-[#e019bc] min-w-30 py-2 px-2 font-medium rounded-br-2xl rounded-t-2xl hover:text-black  text-black hover:text-white'><a href="/public/Ibad_CV.pdf" 
    download={"public/Ibad_CV.pdf"}>Download CV</a></button>
</div>

      </div>



    </div>
  )
}

export default Home
