import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#120907] text-gray-700 flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#a39ce9] text-gray-300'>Contact</p>
          <p className='py-4 text-gray-300'>//Submit the form below or shoot me an email - eduandresalvarezgamba@hotmail.com</p>
        </div>
        <input className='bg-[#ccd6f6]' type="text"placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <input className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' ></input>
        <button className='text-gray-300 border-2 hover:bg-[#a39ce9] hover:border--[#a39ce9] px-4 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact