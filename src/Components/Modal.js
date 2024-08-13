import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';

const Modal = () => {
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      // const [signUpWithGmail]=useContext(AuthContext);
      const authContext=useContext(AuthContext);
      const signUpWithGmail=authContext.signUpWithGmail;
      const login=authContext.login;

      const [errorMessage,setErroMessage]=useState("");

      const location= useLocation();
      const navigate= useNavigate();

      const from=location.state?.from?.pathname || "/";

      

      const onSubmit = (data)=>{
        const email= data.email;
        const password= data.password;
        // console.log(email,password);
        login(email,password).then((result)=>{
          const user=result.user;
          // alert("Login Successfull");
          document.getElementById('my_modal_5').close()
          navigate(from,{replace:true});

        }).catch((error)=>{
          const errorMessage=error.message;
          setErroMessage("provide a correct email and password");
        })
        // reset();
      }

      

      // handle login function
      const handleLogin=()=>{
        signUpWithGmail().then((result)=>{
          const user=result.user;
          alert("Login Successful")
        }).catch((error)=>{
          const errorMessage=error.message;
          setErroMessage("provide a correct email and password");
        }
       )};


  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
    <div className="modal-box">
     
      <div className="modal-action flex-col justify-center -mt-4 ">
       <form className="card-body " method='dialog'  onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold text-lg text-center'>Please Login Here!</h1>
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
{
  errorMessage? <p className='text-red text-xs'>{errorMessage}</p> :""
}


        {/* login button */}
        <div className="form-control mt-6">
          <input type="submit" value="Login"  className="btn bg-blue"/>
        </div>

        <p className='text-center my-2'>Don't have an account?<Link to="/signup" className='underlined text-red ml-2'   onClick={()=>document.getElementById('my_modal_5').close()}> 
      SignUp!</Link>{" "}</p>

        <button  htmlFor="my_modal_5" 
        onClick={()=>document.getElementById('my_modal_5').close()}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>


        </form>
    
      
      {/*social media sign in  */}
      <div className='text-center'>
      <button className="btn btn-circle hover:bg-blue hove:text-white m-4" onClick={handleLogin}>
      <FaGoogle/>
      </button>
      <button className="btn btn-circle hover:bg-blue hove:text-white m-4">
      <FaMicrosoft />
      </button>
      <button className="btn btn-circle hover:bg-blue hove:text-white m-4">
      <CiFacebook />

      </button>
      </div>

      </div>
    </div>
  </dialog>
  )
}

export default Modal