import React from 'react';

const Cardinfo = ({cards}) => {
    
    const {describe,bgClass,icon,name} = cards;
    
    return (
        <div className={`card card-side  shadow-xl ${bgClass}`}>
         <figure><img src={icon} alt=""/></figure> 
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

export default Cardinfo;