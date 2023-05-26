import React from 'react';
import PhotoAlbum from "react-photo-album";
import slide1 from '../assets/Images/slider-1.avif'
import slide2 from '../assets/Images/slider-2.avif'
import slide3 from '../assets/Images/slider-3.avif'
import slide4 from '../assets/Images/slider-4.avif'
import slide5 from '../assets/Images/slider-1.avif'
import slide6 from '../assets/Images/slider-2.avif'
import slide7 from '../assets/Images/slider-3.avif'
import slide8 from '../assets/Images/slider-4.avif'


const GalleryImg = () => {
    const photos = [
        { src: slide1, width: 800, height: 600 },
        { src: slide2, width: 1600, height: 900 },
        { src: slide3, width: 800, height: 600 },
        { src: slide4, width: 1600, height: 900 },
        { src: slide5, width: 800, height: 600 },
        { src: slide6, width: 1600, height: 900 },
        { src: slide7, width: 800, height: 600 },
        { src: slide8, width: 1600, height: 900 },



    ];
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h2 className='text-4xl font-bold text-center uppercase'>Our Gallery</h2>
            <p className='text-center italic text-gray-600 mb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <PhotoAlbum layout="masonry" photos={photos}  />;
        </div>
    );
};

export default GalleryImg;