import React from 'react';
import whitening from '../../../../accts/images/whitening.png';
import cavity from '../../../../accts/images/cavity.png';
import fluoride from '../../../../accts/images/fluoride.png';
import ServiceCard from '../Banner/servicecard/ServiceCard';
import Babydata from '../babyservice/Babydata.js';


const Service = () => {

    const servicedata = [
        {
            id: 1,
            icon:whitening,
            name:"teetch is the function",
            describe: 'teeeth is the most strong think in our life case in histry'

        },
        {
            id: 2,
            icon:cavity,
            name:"teetch is  next year",
            describe: 'teeeth is the most the pal pal hoife case in histry'

        },
        {
            id: 3,
            icon:fluoride,
            name:"this is the man power",
            describe: 'teeeth is the  our eduction in our life'

        }
    ]
    return (
 
         
         <div className='mt-16'>
            
           <div className='text-center'>
            <h1 className='text-2xl text-blue-500'>our service</h1>
            <h2 className='text-4xl'>our service provides</h2>
           </div>


           <div className='grid grid-cols-1  lg:grid-cols-3 gap-3 shadow-lg mt-13 border-x-lime-900'>
           {
                servicedata.map(services =><ServiceCard
               key={services} 
               services={services}
                ></ServiceCard>)
            }
         
           </div>
          <div className='mt-16 '>   <Babydata ></Babydata></div>

        </div>
   
    );
};

export default Service;