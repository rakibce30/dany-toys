import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleToy = () => {
    const { id } = useParams()
    const [toy, setToy] = useState([])
    useEffect(() => {
        fetch(`https://server-nine-blue.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(result => setToy(result))
    }, [])
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row bg-base-200 rounded-xl">
                    <img src={toy.photo} className="max-w-md rounded-lg shadow-2xl w-1/2" />
                    <div className='w=1/2'>
                        <h1 className="text-5xl font-bold pb-2">{toy.name}</h1>
                        <p className="pb-1"><span className='font-bold'>Seller Name:</span> {toy.seller}</p>
                        <p className="pb-1"><span className='font-bold'>Seller Email:</span> {toy.email}</p>
                        <p className="pb-1"><span className='font-bold'>Price:</span> {toy.price}</p>
                        <p className="pb-1"><span className='font-bold'>Rating:</span> {toy.rating}</p>
                        <p className="pb-1"><span className='font-bold'>Quantity:</span> {toy.quantity}</p>
                        <p className="pb-1"><span className='font-bold'>Description:</span> {toy.description}</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;