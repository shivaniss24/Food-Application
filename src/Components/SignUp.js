import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { useForm } from "react-hook-form";
import Modal from './Modal';

const SignUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data)=> console.log(data);


  return (
    <div className='max-w-md bg-white shadow w-full mx-auto text-center justify-center my-20 rounded-2xl'>
    <div className="modal-action flex-col justify-center -mt-4 ">



      {/* form */}
    <form className="card-body " method='dialog'  onSubmit={handleSubmit(onSubmit)}>

     

     <h1 className='font-bold text-lg text-center'>Create a account</h1>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       
       <input type="email" placeholder="email" className="input input-bordered" required 
       {...register("email")}
       />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" placeholder="password" className="input input-bordered" {...register("password")}
        />

       <label className="label">
         <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     {/* errors */}

     {/*  sign button */}
     <div className="form-control mt-6">
       <input type="submit" value="SignUp"  className="btn bg-blue"/>
     </div>

     <p className='text-center my-2'>Already have an account?
        <button className='underlined text-red ml-2' onClick={()=>document.getElementById('my_modal_5').showModal()}>Login!
          </button>{" "}</p>

          <Link to="/"
        className="btn btn-sm btn-circle btn-ghost absolute">
          ✕
          </Link>
      

   </form>




   
   {/*social media sign in  */}
   <div className='text-center'>
   <button className="btn btn-circle hover:bg-blue hove:text-white m-4">
   <FaGoogle />
   </button>
   <button className="btn btn-circle hover:bg-blue hove:text-white m-4">
   <FaMicrosoft />
   </button>
   <button className="btn btn-circle hover:bg-blue hove:text-white m-4">
   <CiFacebook />

   </button>
   </div>

   </div>

   <Modal/>
   </div>
  )
}

export default SignUp