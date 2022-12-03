import React from 'react';
import clock from '../../../../accts/icons/clock.svg'
import marker from '../../../../accts/icons/marker.svg'
import phone from '../../../../accts/icons/phone.svg'
import Cardinfo from './Cardinfo';

const Cardsssinfo = () => {


    const carddata = [
        {
            id: 1,
            name : ' this is clock s',
            describe: 'location by the mt project Y66ui',
            icon : clock,
            bgClass:'primary'
            
        },
        {
            id: 2,
            name : ' this is markers',
            describe: 'our poining clock is 9 thirty am and pm  going soon as possible',
            icon : marker,
            bgClass:'accent'
            
        },
        {
            id: 3,
            name : ' this is phon number bamboo',
            describe: '+88011234567',
            icon : phone,
            bgClass:'bambo'
            
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 shadow-lg gap-10 border-gray-700'>
            {
               carddata.map(cards =><Cardinfo
                key={cards.id}
                cards={cards}>
                </Cardinfo>)
            }
        </div>
    );
};

export default Cardsssinfo;