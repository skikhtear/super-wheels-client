import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';


const BookingModal = ({ bookingInfo, setBookingInfo }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { productName, resalePrice } = bookingInfo;

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        // const slot = form.slot.value;
        // const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            
            itemName: productName,
            price: resalePrice,
            email,
            phone,
            
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingInfo(null);
                    toast.success('Booking confirmed')
                }
                else {
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        {/* <input type="text" disabled value={date} className="input w-full input-bordered " /> */}
                        <input name="productName" defaultValue={productName} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="price" defaultValue={`'$'{resalePrice}`} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="name" defaultValue={`{user?.name} {user?.displayName}`} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="Meeting location" type="text" placeholder="Meeting location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;