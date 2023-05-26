import React, { useEffect, useState } from 'react';
import Slider from '../../components/Slider';
import { FaUserCheck, FaShieldAlt } from 'react-icons/fa';
import { HiOutlineTruck } from "react-icons/hi";
import { TypeAnimation } from 'react-type-animation';
import Card from '../../components/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Home.css'
import Marquee from "react-fast-marquee";
import daraz from '../../assets/Images/Comapany Logo/Daraz-Logo.png';
import meghna from '../../assets/Images/Comapany Logo/Meghna_group_logo.jpg';
import bl from '../../assets/Images/Comapany Logo/banglalink-logo-vector.png';
import pran from '../../assets/Images/Comapany Logo/pran.png';
import shopup from '../../assets/Images/Comapany Logo/shopup8716.jpg';
import GalleryImg from '../../components/GalleryImg';
import TabTitle from '../../utility/title';


const Home = () => {
    TabTitle("Dany | Home");
    const [AllToys, setAllToys] = useState([])
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://server-nine-blue.vercel.app/toys')
            .then(res => res.json())
            .then(result => setAllToys(result))
    }, [])
    useEffect(() => {
        const data = AllToys.slice(0, 6);
        setToys(data)
    }, [AllToys])

    const handleTabOne = () => {
        const data = AllToys.slice(0, 6)
        setToys(data)
    }
    const handleTabTwo = () => {
        const filterToys = AllToys.filter(toy => toy.category == 'transformer')
        const data = filterToys.slice(0, 6)
        setToys(data)
    }
    const handleTabThree = () => {
        const filterToys = AllToys.filter(toy => toy.category == 'marvel')
        const data = filterToys.slice(0, 6)
        setToys(data)
    }
    const handleTabFour = () => {
        const filterToys = AllToys.filter(toy => toy.category == 'avenger')
        const data = filterToys.slice(0, 6)
        setToys(data)
    }
    return (
        <div>
            {/* Slider Section */}
            <Slider></Slider>
            {/* Icon Section */}
            <div className='max-w-screen-lg mx-auto py-6 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text'>
                <div data-aos="fade-right" data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className='flex flex-row items-center space-x-4 justify-center'>
                    <HiOutlineTruck className='text-7xl text-black' />
                    <div>
                        <h2 className='text-xl font-bold'>Free Shipping</h2>
                        <p className='text-sm text-gray-700'>When you spend $100+</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className='flex flex-row items-center space-x-4 justify-center'>
                    <FaUserCheck className='text-6xl text-black' />
                    <div>
                        <h2 className='text-xl font-bold'>SUPPORT 24/7</h2>
                        <p className='text-sm text-gray-700'>Ready to help our clients</p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className='flex flex-row items-center space-x-4 justify-center'>
                    <FaShieldAlt className='text-5xl text-black' />
                    <div>
                        <h2 className='text-xl font-bold'>SECURED PAYMENTS</h2>
                        <p className='text-sm text-gray-700'>We are officially registered</p>
                    </div>
                </div>
            </div>


            {/* Product section */}
            <div className='bg-slate-100 py-12'data-aos="zoom-out" data-aos-easing="ease-out-cubic"  data-aos-duration="1200">
                <div className='max-w-screen-lg mx-auto'>
                    <div className='flex flex-col items-center'>
                        <span className='text-4xl font-bold text-yellow-400'>
                            <span className='text-black'>Stay in</span>{' '}
                            <TypeAnimation
                                sequence={[
                                    'Trend',
                                    2500,
                                    'Models',
                                    2500,

                                ]}
                                repeat={Infinity}
                            />
                        </span>
                        <p>Admin panel allows you to add, delete, edit subtitles</p>
                    </div>


                    <Tabs className="mt-8">
                        <TabList className="flex flex-row space-x-4 justify-center border-b-2 w-fit mx-auto">
                            <Tab onClick={handleTabOne} className="cursor-pointer px-4 py-1">All</Tab>
                            <Tab onClick={handleTabTwo} className="cursor-pointer px-4 py-1">Transformer</Tab>
                            <Tab onClick={handleTabThree} className="cursor-pointer  px-4 py-1">Marvel</Tab>
                            <Tab onClick={handleTabFour} className="cursor-pointer  px-4 py-1">Avenger</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4 lg:px-0'>
                                {
                                    toys.map(toy => <Card
                                        key={toy._id}
                                        toy={toy}
                                    ></Card>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4 lg:px-0'>
                                {
                                    toys.map(toy => <Card
                                        key={toy._id}
                                        toy={toy}
                                    ></Card>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4 lg:px-0'>
                                {
                                    toys.map(toy => <Card
                                        key={toy._id}
                                        toy={toy}
                                    ></Card>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4 lg:px-0'>
                                {
                                    toys.map(toy => <Card
                                        key={toy._id}
                                        toy={toy}
                                    ></Card>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            {/* Gallery */}
            <div className='py-16' data-aos="zoom-in" data-aos-easing="ease-out-cubic"  data-aos-duration="1500">
                <GalleryImg></GalleryImg>
            </div>

            {/* Brand */}
            <div className='max-w-screen-lg mx-auto py-12' data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="1500">
                <h2 className='text-4xl font-bold text-center uppercase'>Our Valuable Client</h2>
                <p className='text-center italic text-gray-600 mb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <Marquee pauseOnHover>
                    <img className='w-[150px] mx-8' src={daraz} alt="" />
                    <img className='w-[150px] mx-8' src={meghna} alt="" />
                    <img className='w-[150px] mx-8' src={bl} alt="" />
                    <img className='w-[150px] mx-8' src={pran} alt="" />
                    <img className='w-[150px] mx-8' src={shopup} alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Home;