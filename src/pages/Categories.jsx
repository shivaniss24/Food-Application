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

        <div>
            {
                categoriesItems.map((items,i)=>(
              <div key={i}>
                <div>
                    <img src={items.image} alt="" className='bg-[#C1FIC6] p-5 rounded-full w-28 h-28'/>
                </div>
                <div>
                    <h5>{items.title}</h5>
                    <p>{items.des}</p>
                </div>

              </div>

                ))
            }
        </div>
    </div>
  )
};

export default Categories