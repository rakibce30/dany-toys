import React, { useContext, useState } from 'react';
import Logo from '../assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSistrix, FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProviders';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [srch, setSrch] = useState(false);
    const { user, userLogout } = useContext(AuthContext)

    const handleLogout = (event) => {
        event.preventDefault();
        userLogout()
            .then(() => {

            })
            .catch(err => console.error(err));
    }

    return (
        <div className='bg-white dark:bg-gray-900 relative'>
            <div className='max-w-screen-lg mx-auto relative'>
                <div className='flex justify-between items-center p-4'>
                    <div>
                        <Link to="/" className='flex flex-row items-center'>
                            <img className='w-[70px] lg:w-[60px]' src={Logo} alt="" />
                            <span className='-ml-3 text-2xl font-semibold'>any</span>
                        </Link>
                    </div>
                    <div className='hidden lg:flex'>
                        <ul className='flex space-x-4  '>
                            <li><Link to="/" className='font-ubuntu font-semibold uppercase text-sm text-gray-600 hover:text-yellow-600'>Home</Link></li>
                            <li><Link to="/all-toys" className='font-ubuntu font-semibold uppercase text-sm text-gray-600 hover:text-yellow-600'>All Toys</Link></li>
                            <li><Link to="/mytoys" className='font-ubuntu font-semibold uppercase text-sm text-gray-600 hover:text-yellow-600'>My Toys</Link></li>
                            <li><Link to="/addtoys" className='font-ubuntu font-semibold uppercase text-sm text-gray-600 hover:text-yellow-600'>Add Toy</Link></li>
                            <li><Link to="/blog" className='font-ubuntu font-semibold uppercase text-sm text-gray-600 hover:text-yellow-600'>Blog</Link></li>
                        </ul>
                    </div>
                    <div className='space-x-4 justify-between items-center hidden lg:flex'>
                        <div className='flex space-x-3 '>
                            <FaShoppingCart className='cursor-pointer' />

                            {/* -------------Search Button------- */}
                            <div >
                                <FaSistrix onClick={() => setSrch(!srch)} className='cursor-pointer' />
                                <div className={`${srch ? 'flex' : 'hidden'} absolute top-[100%] right-[20%] bg-gray-800 rounded p-4 z-10`}>
                                    <input className='p-2 border border-slate-600 rounded-tl rounded-bl bg-transparent text-sm' type="text" name="" placeholder='Search...' />

                                    <button type='submit' className='p-2 border border-yellow-600 cursor-pointer rounded-tr rounded-br bg-yellow-600 text-sm text-black'>Search</button>
                                </div>
                            </div>
                        </div>
                        {
                            user ? <div className="dropdown dropdown-end">
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img tabIndex={0} className='rounded-full w-[40px] cursor-pointer' src={user.photoURL} alt={user.email} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Profile</a></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div>
                                :

                                <Link to="/login" className="btn btn-outline btn-warning ">Login</Link>
                        }
                        
                    </div>

                    {/* ------------------------------Mobile Button------------------------------- */}
                    <div className='lg:hidden'>
                        <button onClick={() => setToggle(!toggle)}>
                            {
                                toggle ? <FaTimes className='cursor-pointer' /> : <FaBars className='cursor-pointer' />
                            }

                        </button>
                    </div>
                </div>

                {/* --------------------------------- Mobile Menu -------------------------------- */}
                <div className={`absolute w-full min-h-screen bg-gray-800 flex-col items-center ${toggle ? 'flex' : 'hidden'} z-10 lg:hidden`}>
                    <div className='flex flex-row items-center space-x-3 pt-8'>
                        <input className='p-2 border border-slate-600 rounded-lg bg-transparent text-sm text-slate-300' type="text" name="" id="" placeholder='Search...' />
                        <FaSistrix className='cursor-pointer text-xl text-slate-300' />
                        <FaShoppingCart className='cursor-pointer text-xl text-slate-300' />
                    </div>
                    <ul className='flex flex-col w-full justify-start items-start p-4 space-y-3 text-slate-300'>
                        <li className='border-b border-slate-700 pl-2 pb-2 w-full'><Link>Home</Link></li>
                        <li className='border-b border-slate-700 pl-2 pb-2 w-full'><Link>All Toys</Link></li>
                        <li className='border-b border-slate-700 pl-2 pb-2 w-full'><Link>My Toys</Link></li>
                        <li className='border-b border-slate-700 pl-2 pb-2 w-full'><Link>Add Toy</Link></li>
                        <li className=' pl-2 w-full'><Link>Blog</Link></li>
                        <li><Link to="/login" className="btn btn-outline btn-warning ">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Header;