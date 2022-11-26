import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';


const MyPosts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/sellpost?email=${user?.email}`;

    const { data: posts = [] } = useQuery({
        queryKey: ['posts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 sm:mx-auto my-10'>
            {
                posts.map(post => <div >
                    <div className="card w-auto glass bg-base-100 shadow-2xl">
                        <figure><img src={post.image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{post.productName}</h2>
                            <p>Original price: ${post.originalPrice}</p>
                            <p>Resale price: ${post.resalePrice}</p>
                            <p>Years of use: {post.yearsOfUse}</p>
                            <p>Location: {post.location}</p>
                            <p>Seller name: {post.sellerName}</p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-primary'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyPosts;



