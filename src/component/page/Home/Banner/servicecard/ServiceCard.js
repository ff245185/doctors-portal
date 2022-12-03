import React from 'react';

const ServiceCard = ({services}) => {

    const {name,icon, describe} = services;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{describe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;