import React, { useState } from 'react';
import chair from '../../../../accts/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppoipnmentBanner = ({selecteded, setSelected}) => {
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='/'/>
                    <div className='mr-6'>
                    <DayPicker
                    mode='single'
                    selected={selecteded}
                    onSelect={setSelected}
                    />
                    <p>you have selected {format(selecteded, 'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoipnmentBanner;