import React from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const MytoysEdit = () => {
    const {id} = useParams()

    const handleEditToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toy = {
            price: form.price.value,
            quantity: form.quantity.value,
            description: form.description.value,
        }

        fetch(`https://server-nine-blue.vercel.app/my-toys/edit/${id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(toy)
            })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    swal({
                        title: "Product updated Successful!"
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className='max-w-screen-md mx-auto shadow-lg bg-slate-100 rounded-lg my-16'>
            <form onSubmit={handleEditToy} className="card-body ">
                <p className='text-red-600'>{Error}</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {/* <input type="text" name="id" defaultValue={myToy._id} id="" /> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' required placeholder="Price" className="input input-bordered" />
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
                    <button className="btn btn-success">Edit Toy</button>
                </div>

            </form>
        </div>
    );
};

export default MytoysEdit;