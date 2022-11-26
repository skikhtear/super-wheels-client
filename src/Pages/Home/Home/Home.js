import React from 'react';
import { Link } from 'react-router-dom';
import SellerRoute from '../../../Routes/SellerRoute/SellerRoute';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <div className='text-center mb-20'>
                <Link to={'/sellpost'}><button className="btn glass w-96 text-bold text-white text-xl">Sell Your Car</button></Link>
            </div>
          <Categories></Categories>  
        </div>
    );
};

export default Home;<Banner></Banner>