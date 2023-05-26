import React, { useEffect } from 'react';
import { useState } from 'react';
import Row from '../../components/Row';
import TabTitle from '../../utility/title';

const AllToys = () => {
    TabTitle("Dany | All Toys");
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://server-nine-blue.vercel.app/toys?limit=20')
            .then(res => res.json())
            .then(result => setToys(result))
    }, [])

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const searchText = form.search.value;
        console.log(searchText);
        fetch(`https://server-nine-blue.vercel.app/toy?name=${searchText}`)
        .then(res => res.json())
        .then(result => setToys(result))
    }
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <form onSubmit={handleSearch} className='text-center bg-white w-fit border rounded-full mx-auto mb-8'>
                <input type="text" name="search" placeholder='Search....' required className='rounded-full py-2 px-3 focus-visible:outline-none' />
                <button className='bg-yellow-400 font-semibold py-2 px-3 rounded-full hover:bg-black  hover:text-white'>Search</button>
            </form>

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
                            toys.map((toy, index) => <Row
                                key={toy._id}
                                toy={toy}
                                index={index}
                            ></Row>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;