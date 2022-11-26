import React from 'react';

const SellPostCard = ({ sellPost }) => {
    const { productName, location, originalPrice, resalePrice, yearsOfUse, sellerName, image, category_id } = sellPost;
    return (
        <div className="card w-auto glass bg-base-100 shadow-2xl">
            <figure><img src={image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>Original price: ${originalPrice}</p>
                <p>Resale price: ${resalePrice}</p>
                <p>Years of use: {yearsOfUse}</p>
                <p>Location: {location}</p>
                <p>Seller name: {sellerName}</p>
                <div className="card-actions justify-end">
                    <button className='btn btn-primary'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default SellPostCard;


