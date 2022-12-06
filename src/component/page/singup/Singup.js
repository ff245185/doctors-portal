import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Contex/Authprovider';

const Singup = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { createuser} = useContext(AuthContex)

    const handlesingup = data => {
        console.log(data);
        console.log(errors);
        createuser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='h-[500px] grid justify-center items-center '>
            <h1 className='text-4xl'>Singup</h1>

            <form onSubmit={handleSubmit(handlesingup)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                </div>
                <input type="name" placeholder="your name" {...register("name")} className="input input-bordered input-primary w-full max-w-xs" />


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                </div>
                <input type="email" placeholder="your email"  {...register("email")} className="input input-bordered input-primary w-full max-w-xs" />


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password</span>
                    </label>
                    <input type="password" placeholder="your password"  {...register("password", {
                       
                       

                    })} className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <br />
                <input className='btn btn-accent w-full' type="submit" value="Login" />


            </form>
            <p>alrady have an account <Link className='text-primary' to='/login'>Login</Link></p>
            <div className="divider">OR</div>
            <button><Link className='btn btn-outline w-full'>coutinew white google</Link></button>
        </div>
    );
};

export default Singup;