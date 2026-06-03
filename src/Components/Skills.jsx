import React from 'react'
import Heading from './Heading'
import html from '../assets/html.png'
import css from '../assets/CSS-Logo-2011.png'
import javaScript from '../assets/Unofficial_JavaScript_logo_2.svg.png'
import tailwind from '../assets/tailwind-css-logo-rounded-free-png-removebg-preview.png'
import react from '../assets/react.js-removebg-preview.png'
const Skills = () => {
  return (
    <div className='max-w-[80%] mx-auto'>

        <Heading heading="My Skills"/>

{/* icons  */}
        <div className='flex gap-7 max-w-[80%] mx-auto items-center justify-center flex-wrap'>

<div className='w-28 h-28  flex items-center justify-center rounded-lg
 '>
    <img src={html} className='h-16 w-16 object-contain' alt="" />
</div>
<div className='w-28 h-28 flex items-center justify-center rounded-lg
'>
    <img src={css} className='h-28 w-28 object-contain ' alt="" />
</div>
<div className='w-28 h-28 flex items-center justify-center rounded-lg
'>
    <img src={javaScript} className='w-14 h-14 object-contain ' alt="" />
</div>
<div className='w-28 h-28 flex items-center justify-center rounded-lg
'>
    <img src={tailwind} className='w-16 h-16 object-contain ' alt="" />
</div>
<div className='w-28 h-28 flex items-center justify-center rounded-lg
'>
    <img src={react} className='w-28 h-28 object-contain ' alt="" />
</div>


        </div>
      
    </div>
  )
}

export default Skills
