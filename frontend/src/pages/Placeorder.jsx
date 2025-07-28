import React from 'react'
import Title from '../components/Title'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          
        </div>
        <div className='flex gap-3'> 
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='FIRST NAME' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='LAST NAME' />



        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='EMAIL ADDRESS' />
         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='STREET' />

      </div>
    </div>
  )
}

export default PlaceOrder