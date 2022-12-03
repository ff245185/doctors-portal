import React from 'react';
import doctor from '../../../../accts/images/doctor.png'
import appointment from '../../../../accts/images/appointment.png'

const Doctor = () => {
    return (
        <section className=' mt-16' style={{
            background : `url(${appointment})`
        }}>
            <div className="hero rounded-lg ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor}className="max-w-sm -mt-32 rounded-lg shadow-2xl"  alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold text-blue-600">Box Office News!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctor;