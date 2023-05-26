import React from 'react';
import { FaFacebookSquare, FaGithub, FaGooglePlusG } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-black mt-5 pt-16'>
                <h2 className='text-slate-200 text-2xl font-bold text-center mb-4'>Do you want to be among the first to know <br></br> about sale time?</h2>
                <div className='text-center bg-white w-fit border rounded-full mx-auto'>
                    <input type="text" name="" placeholder='Enter your Email' className='rounded-full py-2 px-3 focus-visible:outline-none' />
                    <button className='bg-yellow-400 font-semibold py-2 px-3 rounded-full hover:bg-black  hover:text-white'>Subscribe</button>
                </div>
                <footer className="footer p-10 max-w-screen-lg mx-auto text-neutral-content">
                    <div className='flex flex-col justify-center h-full'>
                        <h1 className='text-5xl font-prompt text-white font-bold'>DANY</h1>
                        <p>Providing reliable tech since 2023</p>
                        <p>E-mail: <a className='underline' href="mailto:rakibce30@gmail.com">rakibce30@gmail.com</a></p>
                        <p>Address: Gulshan-1, Dhaka-1212</p>
                    </div>
                    <div>
                        <span className="footer-title">Menu</span>
                        <ul>
                            <li><Link className='text-yellow-600 text-sm font-semibold font-roboto uppercase hover:text-white'>Home</Link></li>
                            <li><Link className='text-yellow-600 text-sm font-semibold font-roboto uppercase hover:text-white'>All Toys</Link></li>
                            <li><Link className='text-yellow-600 text-sm font-semibold font-roboto uppercase hover:text-white'>My Toys</Link></li>
                            <li><Link className='text-yellow-600 text-sm font-semibold font-roboto uppercase hover:text-white'>Add Toy</Link></li>
                            <li><Link className='text-yellow-600 text-sm font-semibold font-roboto uppercase hover:text-white'>Blog</Link></li>

                        </ul>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4">
                            <a><FaFacebookSquare className='text-xl cursor-pointer text-gray-700 hover:text-white' /></a>
                            <a><FaGithub className='text-xl cursor-pointer text-gray-700 hover:text-white' /></a>
                            <a><FaGooglePlusG className='text-xl cursor-pointer text-gray-700 hover:text-white' /></a>

                        </div>
                    </div>
                </footer>
                <p className='text-center py-2'>copyright @2023</p>
            </div>
        </div>
    );
};

export default Footer;