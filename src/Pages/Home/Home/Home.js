import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useSeller from '../../../hooks/useSeller';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';


const Home = () => {
    const {user} = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)


    return (
        <div>
            <Banner></Banner> 
            <div className='text-center mb-20'>
                { isSeller ?
                    <>
                        <Link to={'/sellpost'}><button className="btn glass w-96 text-bold text-white text-xl">Sell Your Car</button></Link>
                    </>
                    :
                    <>
                        <Link to={'/signup'}><button className="btn glass  text-bold text-white text-xl text-center pb-20 pt-8">You Want Sell Your Car?<br/> Sign up as a seller</button></Link>
                    </>
                }
                
            </div>
          <Categories></Categories>  
        </div>
    );
};

export default Home;