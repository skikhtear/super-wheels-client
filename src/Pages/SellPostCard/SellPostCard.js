import React from 'react';

const SellPostCard = ({ sellPost, setBookingInfo }) => {
    const { productName, location, originalPrice, resalePrice, yearsOfUse, sellerName, image, category_id } = sellPost;
    return (
        <div className="card w-auto glass bg-base-100 shadow-2xl" key={category_id}>
            <figure><img src={image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Original price: ${originalPrice}</p>
                <p>Resale price: ${resalePrice}</p>
                <p>Years of use: {yearsOfUse}</p>
                <p>Location: {location}</p>
                <p>Seller name: {sellerName}</p>
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setBookingInfo(sellPost)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SellPostCard;


