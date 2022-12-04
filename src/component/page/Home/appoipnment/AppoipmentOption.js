

const AppoipmentOption = ({ appoipment,settrightment}) => {
    const {name, slots} = appoipment;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
                <p>{slots.length > 0 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center">
                 <label
                 disabled={slots.length === 0}
                  htmlFor="booking-modal" className="btn btn-primary"
                   onClick={() =>settrightment(appoipment)}>
                    open Appoipnments</label>
                </div>
            </div>
        </div>
    );
};

export default AppoipmentOption;