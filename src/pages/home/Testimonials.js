import React from 'react';
import { FaStar } from 'react-icons/fa';



const Testimonials = () => {
  return (
  <div className='section-container -mt-40'>
    <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
        <div className='md:w-1/2'>
        <img src="/images/home/testimonials/testimonials.png" alt="" className='rounded-full' />
        </div>

        <div className='md:w-1/2'>
           <div className='text-left'>
            <p className='subtitle'>Testimonials</p>
            <h3 className='title'>Know what our customers say about us</h3>
            <backquote className="my-5 text-secondary leading-[30px]">"I had the great ecperience in ordering the food from this app. The customer service is best provided here!"</backquote>

        {/* Avatar */}
        <div className='flex items-center gap-4 flex-wrap'>
        <div className="avatar-group -space-x-6 rtl:space-x-reverse ">
  <div className="avatar">
    <div className="w-12">
      <img src="images/home/testimonials/testimonials1.jpg" alt='' />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="images/home/testimonials/testimonials2.png" alt=''/>
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="images/home/testimonials/testimonials3.jpg" alt=''/>
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="images/home/testimonials/testimonials4.jpg" alt=''/>
    </div>
  </div>
</div>
      <div className='space-y-1'>
        <h5 className='text-lg font-semibold'>Customer Feedback</h5>

        <div  className='flex-items-center gap-2'>
          <FaStar className='text-yellow-400'/>
          <span className='font-medium'>4.9</span> {" "}
          <span className='text-[#807E7E]'>("10003 reviews")</span>
        </div>
      </div>
           </div>
        </div>
    </div>
  </div>
  </div>
  )
}

export default Testimonials