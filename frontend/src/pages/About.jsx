import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum iure voluptatem commodi odit quibusdam dolor temporibus, incidunt officiis fugit praesentium?

        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, eum.

        </p>

        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sequi cumque, excepturi nulla optio ullam, porro, delectus praesentium at ab impedit nemo dolor exercitationem aliquid. Nesciunt blanditiis saepe aliquam, voluptatibus non delectus accusamus ipsum ducimus eum modi aperiam nobis quos?

        </p>
        </div>

      </div>
      <div className='text-xl py-4' >
        <Title text1={'WHY'} text2={'CHOOSE US'} />


      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus corporis fugiat ut, deleniti aut voluptas est, illum molestiae laboriosam illo optio aliquam voluptatem quod eum?

          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus corporis fugiat ut, deleniti aut voluptas est, illum molestiae laboriosam illo optio aliquam voluptatem quod eum?

          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service:</b>
          <p className='text-gray-600'>We Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus corporis fugiat ut, deleniti aut voluptas est, illum molestiae laboriosam illo optio aliquam voluptatem quod eum?

          </p>
        </div>

      </div>

      <NewsletterBox />


    </div>
  )
}

export default About