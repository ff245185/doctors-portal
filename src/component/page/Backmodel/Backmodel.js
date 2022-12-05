import { format } from 'date-fns/esm';
import React from 'react';

const Backmodel = ({trightment,selecteded}) => {
    const {name,slots} = trightment;
    console.log(name);
    const date = format(selecteded, 'PP')

const handleinfo = (event) =>{
    event.preventDefault();
       

    const form = event.target
    // const slots = form.slots.value
    // const name = form.name.value
    const email= form.email.value
    const phon = form.phon.value

    console.log(slots, name, date, email , phon )

}

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleinfo} className='grid grid-cols-1 gap-6'>
                    <input type="text" value={date} disabled className="input input-bordered input-info w-full" />
                   
                    <select className="select select-bordered w-full max-w-xs">
                       {
                        slots.map(slot =><option>{slot}</option>)
                       }
                  </select> 
                    <input name='name' type="text" placeholder="Type name" className="input input-bordered input-info w-full" />
                    <input name='email' type="email" placeholder="Type email" className="input input-bordered input-info w-full" />
                    <input name='phon' type="text" placeholder="Type phon number" className="input input-bordered input-info w-full" />
                    <input className='w-full btn btn-primary' type="submit"  value="submit" />
                    </form>
                </div>
                
            </div>
        </>
    );
};

export default Backmodel;