import React from 'react'


const categoriesItems=[
    {
        id:1,title:"break fast",des:"{23 dishes}",image:"images/home/category/img1.png"
    },
    {
        id:2,title:"Lunch",des:"{33 dishes}",image:"images/home/category/img2.png"
    },
    {
        id:3,title:"Snack",des:"{233 dishes}",image:"images/home/category/img3.png"
    },
    {
        id:4,title:"Dinner",des:"{9 dishes}",image:"images/home/category/img2.png"
    },
    {
        id:5,title:"Check All",des:"{9 dishes}",image:"images/home/category/img1.png"
    }

]

const Categories = () => {
  return (
    <div className='section-container py-8'>
        <div className='text-center'>
            <p className='subtitle'> 
            Customer Favourites
            </p>
            <h2 className='title'>
                    {" "}
                    Popular Categories</h2>
        </div>

        
        {/* categories cards */}

        <div className='flex flex-col sm:flex-row flex-wrap gap-5 justify-around items-center mt-12'>
            {
                categoriesItems.map((items,i)=>(
              <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-70 mx-auto text-center cursor-pointer hover:-translate-y-6 duration-300 transition-all'>
                <div className='flex w-full mx-auto items-center justify-center'>
                    <img src={items.image} alt="" className='bg-[#C4F1C6] p-5 rounded-full w-28 h-28'/>
                </div>
                <div className='mt-5 space-y-1'>
                    <h5 className='text-[#1E1E1E] font-semibold'>{items.title}</h5>
                    <p className='text-secondary text-sm'>{items.des}</p>
                </div>

              </div>

                ))
            }
        </div>
    </div>
  )
};

export default Categories