import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import TabTitle from '../../utility/title';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Mytoys = () => {
    TabTitle("Dany | My Toys");
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    useEffect(() => {
        fetch(`https://server-nine-blue.vercel.app/my-toys?email=${user.email}`)
            .then(res => res.json())
            .then(result => setMyToys(result))
    }, [])

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://server-nine-blue.vercel.app/my-Toys/delete/${id}`, {
                        method: 'DELETE'
                    })
                        .then(response => response.json())
                        .then(result => {
                            if (result.deletedCount > 0) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = myToys.filter(toy => toy._id != id);
                                setMyToys(remaining);
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    const sortingToys = (sort) => {
        fetch(`https://server-nine-blue.vercel.app/my-toys?email=${user.email}&sort=${sort}`)
        .then(res => res.json())
        .then(result => setMyToys(result))
    };


    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <div className='flex flex-row justify-end space-x-4 mb-4'>
                <button onClick={()=>sortingToys(1)} className='btn bg-black btn-sm'>Ascending <FaArrowDown/></button>
                <button onClick={()=>sortingToys(-1)} className='btn bg-black btn-sm'>Descending 
                <FaArrowUp/></button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myToys.map((myToy, index) => (
                                <tr key={myToy._id}>
                                    <th>{index + 1}</th>
                                    <td>{myToy.seller}</td>
                                    <td>{myToy.name}</td>
                                    <td>{myToy.category}</td>
                                    <td>{myToy.price}</td>
                                    <td>{myToy.quantity}</td>
                                    <td>
                                        <Link to={`/my-toys/edit/${myToy._id}`} className='btn btn-sm btn-success mr-4'>Edit</Link>
                                        <button onClick={() => handleDelete(myToy._id)} className='btn btn-sm btn-error'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mytoys;