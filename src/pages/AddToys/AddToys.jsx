import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import swal from 'sweetalert';
import TabTitle from '../../utility/title';

const AddToys = () => {
    TabTitle("Dany | Add Toys");
    const {user} = useContext(AuthContext);

    const handleToyAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const toy = {
            name: form.name.value,
            seller: form.seller.value,
            email: form.email.value,
            category: form.category.value,
            photo: form.photo.value,
            price: form.price.value,
            rating: form.rating.value,
            quantity: form.quantity.value,
            description: form.description.value,
        }
        fetch('https://server-nine-blue.vercel.app/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(result => {
            if(result.acknowledged === true){
                swal({
                    title: "Toy added successfully"
                });
                form.reset();
            }
        })
     }
    return (
        <div>
            <div className='max-w-screen-md mx-auto rounded-xl shadow-lg my-6 bg-slate-100'>
                <form onSubmit={handleToyAdd} className="card-body ">
                    <p className='text-red-600'>{Error}</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='seller' required defaultValue={user.displayName} placeholder="Seller Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" name='email' readOnly defaultValue={user.email} placeholder="Seller Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" className="input input-bordered">
                                <option value="uncategories">Choose Category</option>
                                <option value="marvel">Marvel</option>
                                <option value="transformer">Transformer</option>
                                <option value="avenger">Avenger</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' required placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' required placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' required placeholder="Rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' required placeholder="Quantity" className="input input-bordered" />
                        </div>

                    </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" className="input input-bordered" cols="30" rows="10"></textarea>
                            {/* <input type="text" name='email' required placeholder="email" className="input input-bordered" /> */}
                        </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-warning">Add Toy</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddToys;