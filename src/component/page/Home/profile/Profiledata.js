import React from 'react';
import people1 from '../../../../accts/images/people1.png'
import people2 from '../../../../accts/images/people2.png'
import people3 from '../../../../accts/images/people3.png'
import Profile from './Profile';

const Profiledata = () => {
    const carddatasw = [
        {
            id: 1,
            company: "amazon",
            directory: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "marker",
            pic: people1
        },
        {
            id: 2,
            company: "alibaba",
            directory: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "jsone",
            pic: people2
        },
        {
            id: 3,
            company: "jawat",
            directory: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "ebay",
            pic: people3
        }
    ]
    return (
        <div>
            <div>
                <h1 className='text-1xl text-blue-500'>Testimonial</h1>
                <h2 className='text-4xl'>What Our Patients Says</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-9'>
                {
                    carddatasw.map(profiles =><Profile
                    key={profiles}
                    profiles={profiles}
                    >

                    </Profile>)
                  }
            </div>
        </div>
    );
};

export default Profiledata;