import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, picture,_id } = category;
    return (
        <Link to={`/category/${_id}`}><div className="card card-compact w-auto bg-base-100 shadow-xl mx-5 ">
            <figure><img src={picture} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{name}</h2>
            </div>
        </div></Link>
        
    );
};

export default CategoryCard;