import React from 'react';

import Banner from '../Banner/Banner';
import Cardsssinfo from '../Cardinfo/Cardsssinfo';
import Textcomments from '../comments/Textcomments';
import Doctor from '../doctor/Doctor';
import Profiledata from '../profile/Profiledata';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className='mx-6px'>
         <Banner></Banner>
           <Cardsssinfo></Cardsssinfo>
           <Service></Service>
           <Doctor></Doctor>
           <Profiledata></Profiledata>
           <Textcomments></Textcomments>
        </div>
    );
};

export default Home;