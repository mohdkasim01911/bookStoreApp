import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
        console.log(data); // Replace this with actual login logic
    };



  return (
    <>
    
    <div className='flex h-screen items-center justify-center '>
        
        <div id="my_modal_3" className="w-[600px]">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it wi ll close the modal */}
                <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Signup</h3>
                <div className='mt-4 space-y-2'>
                    <span>Name</span><br></br>
                    <input type='text' {...register("name", { required: "Name is required" })}  placeholder='Enter your full name' className='w-80 px-3 py-1 border rounded-md outline-none' /> 
                    {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Email</span><br></br>
                    <input type='email' {...register("email", { required: "Email is required" })}  placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' /> 
                    {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Password</span><br></br>
                    <input type='password' {...register("password", { required: "Password is required" })}  placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' /> 
                </div>
                {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                <div className='flex justify-around mt-4'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Login</button>
                    <p>
                       Have account?{" "} <button className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>{" "}
                       <Login />
                 </p>
                </div>
                </form>
            </div>
        </div>


    </div>
    
    
    </>
  )
}

export default Signup