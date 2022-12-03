import React from 'react';

const Babyservice = ({baby}) => {
    const {img,name,describe} = baby;
    return (
        <div className="card lg:card-side shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{describe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-danger">seen this</button>
                </div>
            </div>
        </div>
    );
};

export default Babyservice;