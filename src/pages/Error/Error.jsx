import React from 'react';
import Img from '../../assets/Images/error.avif'
import { Link } from 'react-router-dom';
import TabTitle from '../../utility/title';

const Error = () => {
    TabTitle("Dany | 404");
    const bg = {
        backgroundImage: `url(${Img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'

}
return (
    <div style={bg} className='min-h-screen'>
        <div className='relative'>
            <Link to="/" className='btn btn-warning absolute top-0 -translate-x-1/2 left-1/2'>Home</Link>
        </div>
    </div>
);
};

export default Error;