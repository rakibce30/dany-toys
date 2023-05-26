import React, { useContext } from 'react';
import img from '../assets/Images/trans_1.png';
import { AuthContext } from '../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Card = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleView = (id) => {
        if (user) {
            navigate(`/toy/${id}`)
        }
        else {
            swal({
                title: "You have to log in first to view details"
            });
            navigate('/login')
        }
    }
    let count = 0;

    const ratingElement = [
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />,
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />,
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />,
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />,
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    ]


    return (
        <div className='bg-white rounded-xl p-4'>
            <div className='flex flex-row justify-between items-center mb-4'>
                <h3 className='text-sm'>{toy.name}</h3>
                <p className='text-xl font-semibold'>${toy.price}</p>
            </div>
            <img src={toy.photo} alt="" className='rounded-lg bg-yellow-100' />
            <div className='text-center mt-2 space-y-2'>
                <p>Category: {toy.category}</p>
                {/* <p>Rating: {toy.rating}</p> */}
                <div className="rating">
                    {
                        ratingElement.slice(0, toy.rating).map((element) => element )
                    }
                </div>
                <div>
                    <button onClick={() => handleView(toy._id)} className='rounded-full py-2 px-8 text-sm font-semibold border bg-yellow-400 hover:border hover:bg-transparent hover:border-yellow-400'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;