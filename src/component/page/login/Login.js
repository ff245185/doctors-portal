import { data } from 'autoprefixer';
import { min } from 'date-fns';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
   const [login,setlogin] = useState();
 
      const handlelogin = data =>{
        console.log(data);
      }

    return (
        <div className='h-[400px] grid justify-center items-center'>
            <h1 className='text-4xl'>Login</h1>

            <form onSubmit={handleSubmit(handlelogin)}>
                

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    
                    <input className="input input-bordered w-full max-w-xs" type='text' {...register("email",{required:"Email Address is required"})}/>
                </div>
                {errors.email && <p className='text-primary' role="alert">{errors.email?.message}</p>}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password</span>
                    </label>
                  
                    <input className="input input-bordered w-full max-w-xs" type='password' {...register("passord",{required:"password Address is required",min:8, max:12}, )} />
                    <label className="label">
                        <span className="label-text">forget passwoed</span>
                    </label>
                    {errors.password && <p className='text-primary' role="alert">{errors.password.message}</p>}
                </div>
                     <input className='btn btn-accent w-full' type="submit" value="Login" />
               
              
            </form>
       <p>New to doctor portall account <Link className='text-primary' to='/singup'>singup</Link></p>
       <div className="divider">OR</div>
       <button><Link className='btn btn-outline w-full'>coutinew white google</Link></button>
        </div>
    );
};

export default Login;