import React from 'react';

const CategoryCard = ({ category }) => {
    const { name, picture } = category;
    return (
        <div className="card bg-base-100 shadow-xl image-full h-52 w-72">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;