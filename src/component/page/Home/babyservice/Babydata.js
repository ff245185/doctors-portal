import React from 'react';
import treatmen from '../../../../accts/images/treatment.png'
import Babyservice from './Babyservice';

const Babydata = () => {
    const babydata = [
        {
            id:1,
            img:treatmen,
            name:"Exceptional Dental Care, on Your Terms",
            describe:"It is a long established fact that a reader will be distracted by  the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop "
        }
    ]
    return (
        <div className='mt-16'>
            {
                babydata.map(baby =><Babyservice
                key={baby}
                baby={baby}
                ></Babyservice>)
            }
        </div>
    );
};

export default Babydata;