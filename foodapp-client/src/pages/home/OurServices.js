import React from 'react';
import { FaStar } from 'react-icons/fa';

const servicesList=[
    {
      id:1,
      title:"catering",
       des:"This is a food app",
       image:"/images/home/category/img1.png"
    },
    {
      id:2,
      title:"catering",
       des:"This is a food app",
       image:"/images/home/category/img2.png"
    },
    {
      id:3,
      title:"catering",
       des:"This is a food app",
       image:"/images/home/category/img3.png"
    },
    {
      id:4,
      title:"catering",
       des:"This is a food app",
       image:"/images/home/category/img4.png"
    },
   
  ]

const OurServices = () => {
  return (
    <div className='section-container my-16'>
    <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
     

        <div className='md:w-1/2'>
           <div className='text-left'>
            <p className='subtitle'>Our Services</p>
            <h3 className='title'>Check out our services</h3>
           <p className='my-5 text-secondary leading-[30px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nisi animi reiciendis dicta nulla itaque ipsum in odio vero numquam! Repellendus soluta, eligendi consequuntur eius corrupti nobis voluptate nam quo!</p>

           <button className='btn bg-blue text-white px-8 py-3 rounded-full'>Explore</button>
  
        </div>
    </div>
    <div className='md:w-1/2'>
        {/* <img src="/images/home/testimonials/testimonials.png"
         alt=""
         className='rounded-full'/> */}
         <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
            {
                servicesList.map((services)=>{
                    return (
                        <div key={services.id} className='shadow-md rounded-sm py-5 px-5 text-center space-y-2 text-blue cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border '>
                            <img src={services.image} alt="" className='mx-auto w-200 h-200' />
                            <h5 className='pt-3 font-semibold'>{services.title}</h5>
                            <p className='text-[#90BD95]'>{services.des}</p>
                        </div>
                    )
                })
            }
         </div>
        </div>
  </div>

    </div>
  )
}

export default OurServices