import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider';


const Cards = ({item}) => {
    const [isHeartFilled,setHeartFilled]=useState(false);
    const {user} = useContext(AuthContext);
    const{name,image,price,recipe,_id}=item;

const  handleAddToCart=(item)=>{
  console.log("add to cart clicked",item);
  if(user && user?.email){
    const cartItem= {menuItemId: _id, name,quantity:1, image,price,email:user.email, };
    // console.log(cartItem);
   fetch('http://localhost:3000/carts').then((res)=>res.json()).then((data)=>{
    console.log(data);
   }); 
  }
}


    const handleHeartClick=()=>{
        setHeartFilled(!isHeartFilled);
    }

  

  return (

    <div className="card shadow-xl relative mr-5 md:my-5">

        <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-blue ${isHeartFilled? "text-rose-500":"text-white"}` } onClick={handleHeartClick}>

            <FaHeart className='h-5 w-5 cursor-pointer' />
        </div>

      <Link to={`/menu/${item._id}`}>
      <figure>
      <img src={item.image} alt=""
      className='hover:scale-105 transition-all duration-200 md:h-32 md:w-42 gap-10' 
      />

    </figure>
    </Link> 

    <div className="card-body">
    <Link to={`/menu/${item._id}`}>
      <h2 className="card-title">{item.title}</h2>
      </Link>
    
    
      <p>{item.recipe}</p>
      <div className="card-actions justify-between items-center mt-2">
        <h5 className='font-semibold'>
            <span className='text-sm text-red'>$</span>
            {item.price}</h5>
        <button className="btn bg-blue text-white" onClick={()=>handleAddToCart(item)}>Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default Cards