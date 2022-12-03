
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Backmodel from '../../Backmodel/Backmodel';
import AppoipmentOption from './AppoipmentOption';

const Avableappoinment = ({selecteded}) => {
    const [appoipmentOption, setappoipmentOption] = useState([])
    const [trightment , settrightment] = useState(null);

    useEffect(()=>{
        fetch('appoipmentOption.json')
        .then(res => res.json())
        .then(data => setappoipmentOption(data))
    },[])



    return (
        <div>
            <p className='text-center text-primary'>avable avable appinment on {format(selecteded, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                appoipmentOption.map(appoipment => <AppoipmentOption
                    key={appoipment._id}
                    appoipment={appoipment}
                    settrightment={settrightment}
                    ></AppoipmentOption>)
               }
            </div>
          { trightment &&
            <Backmodel>
                {trightment}
                </Backmodel>
                }
        </div>
    );
};

export default Avableappoinment;