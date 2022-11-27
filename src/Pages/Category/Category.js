import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Boooking/BookingModal';
import SellPostCard from '../SellPostCard/SellPostCard';

const Category = () => {
    const categorySellPost = useLoaderData()
    const [bookingInfo, setBookingInfo] = useState(null)
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 sm:mx-auto'>
            {
                categorySellPost.map(sellPost => <SellPostCard
                    key={sellPost._id}
                    sellPost={sellPost}
                    setBookingInfo={setBookingInfo}
                ></SellPostCard>)
            }
            {
                bookingInfo &&
                <BookingModal

                    bookingInfo={bookingInfo}
                    setBookingInfo={setBookingInfo}

                ></BookingModal>
            }
        </div>
    );
};

export default Category;