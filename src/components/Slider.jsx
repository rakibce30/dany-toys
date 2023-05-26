import React from 'react';
import slide1 from '../assets/Images/slider-1.avif'
import slide2 from '../assets/Images/slider-2.avif'
import slide3 from '../assets/Images/slider-3.avif'
import slide4 from '../assets/Images/slider-4.avif'
import Header from './Header';

const Slider = () => {
    return (
        <div className='max-w-screen-lg  mx-auto' data-aos="zoom-in" data-aos-easing="ease-out-cubic"  data-aos-duration="500">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[500px]">
                    <img src={slide3} className="w-full" />
                    <div className='absolute w-1/2 justify-center flex pl-6  bg-gradient-to-r from-black to-[rgba(255, 255, 255, 0.9)] flex-col space-y-6 h-full text-slate-200'>
                        <h2 className='text-4xl font-bold'>Affordable Price For Toy</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-warning'>Get More Toys</button>
                            <button className="btn btn-outline btn-warning">Sing Up</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform  left-5 right-5 bottom-5">
                        <a href="#slide4" className="btn btn-circle bg-transparent hover:btn-warning">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent hover:btn-warning">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[500px]">
                    <img src={slide1} className="w-full" />
                    <div className='absolute w-1/2 justify-center flex pl-6  bg-gradient-to-r from-black to-[rgba(255, 255, 255, 0.9)] flex-col space-y-6 h-full text-slate-200'>
                        <h2 className='text-4xl font-bold'>Affordable Price For Toy</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-warning'>Get More Toys</button>
                            <button className="btn btn-outline btn-warning">Sing Up</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform  left-5 right-5 bottom-5">
                        <a href="#slide1" className="btn btn-circle bg-transparent hover:btn-warning">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent hover:btn-warning">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[500px]">
                    <img src={slide2} className="w-full" />
                    <div className='absolute w-1/2 justify-center flex pl-6  bg-gradient-to-r from-black to-[rgba(255, 255, 255, 0.9)] flex-col space-y-6 h-full text-slate-200'>
                        <h2 className='text-4xl font-bold'>Affordable Price For Toy</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-warning'>Get More Toys</button>
                            <button className="btn btn-outline btn-warning">Sing Up</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform  left-5 right-5 bottom-5">
                        <a href="#slide2" className="btn btn-circle bg-transparent hover:btn-warning">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-transparent hover:btn-warning">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[500px]">
                    <img src={slide4} className="w-full" />
                    <div className='absolute w-1/2 justify-center flex pl-6  bg-gradient-to-r from-black to-[rgba(255, 255, 255, 0.9)] flex-col space-y-6 h-full text-slate-200'>
                        <h2 className='text-4xl font-bold'>Affordable Price For Toy</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='btn btn-warning'>Get More Toys</button>
                            <button className="btn btn-outline btn-warning">Sing Up</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform  left-5 right-5 bottom-5">
                        <a href="#slide3" className="btn btn-circle bg-transparent hover:btn-warning">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-transparent hover:btn-warning">❯</a>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Slider;