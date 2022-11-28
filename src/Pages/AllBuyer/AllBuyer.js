import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://super-wheels-server.vercel.app/users/buyer');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this user');
        if (proceed) {
            fetch(`https://super-wheels-server.vercel.app/users/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('deleted successfully');
                        refetch()
                    }
                })
        }
    }

    return (
        <div>
            <h2 className="text-3xl">All Buyer</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleDelete(user._id)}
                                    className='btn btn-xs btn-primary'>Delete user</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;