import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) => {
        console.log(data); // Replace this with actual login logic
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4 space-y-2'>
                            <label htmlFor="email">Email</label><br />
                            <input 
                                id="email" 
                                type='email' 
                                {...register("email", { required: "Email is required" })} 
                                placeholder='Enter your email' 
                                className='w-80 px-3 py-1 border rounded-md outline-none' 
                            /> 
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <label htmlFor="password">Password</label><br />
                            <input 
                                id="password" 
                                type='password' 
                                {...register("password", { required: "Password is required" })} 
                                placeholder='Enter your password' 
                                className='w-80 px-3 py-1 border rounded-md outline-none' 
                            /> 
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button 
                                type="submit" 
                                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'
                            >
                                Login
                            </button>
                            <p>
                                Not Registered?{" "} 
                                <Link to={"signup"} className='underline text-blue-500 cursor-pointer'>
                                    Signup
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;

