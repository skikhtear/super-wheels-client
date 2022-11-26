import { useQuery } from '@tanstack/react-query';
import React, { useContext,useEffect,useState } from 'react';
import { set } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';


const MyPosts = () => {
    const { user,logOut } = useContext(AuthContext);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/sellposts?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setPosts(data);
            })
    }, [user?.email, logOut])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto my-10'>
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



