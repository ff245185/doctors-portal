import React from 'react';
import appointment from '../../../../accts/images/appointment.png'
const Textcomments = () => {
    return (
        <div className='mt-16'>
            <div>
                <h1 className='text-2xl text-center'>contuct us</h1><h2 className='text-4xl text-red-600 text-center'>Stay conect white us</h2>
            </div>
            
            <div className='justify-items-center grid grid-cols-1 mt-8'style={{ backgroundImage: `url(${appointment})`} }> <input type="text" placeholder="Email address" className="input input-bordered input-sm w-full max-w-xs" />
                <br />
                <input type="text" placeholder="submit from" className="input input-bordered input-md w-full max-w-xs" />
                <br />
                <input type="text" placeholder="your massage " className="input input-bordered input-lg w-full max-w-xs" /></div>
                <br />
                <button className="btn btn-accent justify-items-center">Button</button>
        </div>
    );
};

export default Textcomments;