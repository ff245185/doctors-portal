import React from 'react';
import chair from '../../../../accts/images/chair.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm  w-1/2 rounded-lg shadow-2xl" alt='/'/>
          <div>
            <h1 className="text-5xl font-bold">Your are new seavel starts <br />Hare</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-orange-400 text-black">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;