import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-12 mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=1000w" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-9xl font-bold">404</h1>
                    <p className="py-6 text-5xl font-bold">OoPS! PAGE NOT FOUND</p>
                    <Link to='/'><button className="btn btn-info">BACK TO HOME</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;