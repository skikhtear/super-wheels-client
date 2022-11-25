import React from 'react';

const SellPostCard = ({ sellPost }) => {
    const { productName, location, originalPrice, resalePrice, yearsOfUse, sellerName, image, category_id } = sellPost;
    return (
            <div className="card card-compact w-auto bg-base-100 shadow-xl mx-5 ">
                <figure><img src={image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
            <div className="card-body d-flex">
                <div className='d-flex'>
                    <div>
                        <h2 className="card-title text-3xl font-bold">{productName}</h2>
                        <p>Original price: ${originalPrice}</p>
                        <p>Resale price: ${resalePrice}</p>
                        <p>Years of use: {yearsOfUse}</p>
                        <p>Location: {location}</p>
                        <p>Seller name: {sellerName}</p>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Book Now</button>
                    </div> 
                  </div>
                </div>
            </div>
    );
};

export default SellPostCard;