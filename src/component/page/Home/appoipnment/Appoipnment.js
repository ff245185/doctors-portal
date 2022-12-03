import React, { useState } from 'react';
import AppoipnmentBanne from './AppoipnmentBanner';
import Avableappoinment from './Avableappoinment';

const Appoipnment = () => {
    const [selecteded, setSelected] = useState(new Date());
    return (
        <div>
           <AppoipnmentBanne selecteded={selecteded} setSelected={setSelected}></AppoipnmentBanne>
           <Avableappoinment selecteded={selecteded}></Avableappoinment>
        </div>
    );
};

export default Appoipnment;