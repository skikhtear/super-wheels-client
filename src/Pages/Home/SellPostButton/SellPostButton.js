import React from 'react';
import { Link } from 'react-router-dom';

const SellPostButton = () => {
    return (
        <div>
            <Link to={'/sellpost'}><button className="btn glass w-96 text-bold text-white text-xl">Sell Your Car</button></Link>
        </div>
    );
};

export default SellPostButton;