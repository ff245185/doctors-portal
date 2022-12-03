import React from 'react';

const Profile = ({carddatasw}) => {
    console.log(carddatasw)
    // const {name,company,pic,directory} = carddatasw ;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{}</h2>
                <p>{}</p>
                <div className="d-flex">
                    <img src='' alt="" />
                    <button className="btn btn-primary">{}</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;