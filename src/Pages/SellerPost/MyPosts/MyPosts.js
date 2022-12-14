import React, { useContext,useEffect,useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';


const MyPosts = () => {
    const { user,logOut } = useContext(AuthContext);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://super-wheels-server.vercel.app/sellposts?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
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

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this sell post');
        if (proceed) {
            fetch(`https://super-wheels-server.vercel.app/sellpost/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('deleted successfully');
                        const remaining = posts.filter(odr => odr._id !== id);
                        setPosts(remaining);
                    }
                })
        }
    }

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
                            <p>Year of Purchase: {post.yearsOfPurchase}</p>
                            <p>Condition Type: {post.condition}</p>
                            <p>Description: {post.description}</p>
                            <p>Phone: {post.phone}</p>
                            <p>Location: {post.location}</p>
                            <p>Seller name: {post.sellerName}</p>
                            <div className="card-actions justify-end">
                                <td>{user?.role !== 'seller' && <button onClick={() => handleDelete(post._id)} className='btn btn-primary'>Delete post</button>}</td>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyPosts;



