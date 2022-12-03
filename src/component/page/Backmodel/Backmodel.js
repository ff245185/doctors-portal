import React from 'react';

const Backmodel = ({trightment}) => {
    const {name} = trightment;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-6'>
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
                    <input className='w-full btn btn-primary' type="submit"  value="submit" />
                    </form>
                </div>
                
            </div>
        </>
    );
};

export default Backmodel;