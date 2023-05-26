import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import swal from 'sweetalert';
import TabTitle from '../../utility/title';

const Register = () => {
    TabTitle("Dany | Register");
    const [Error, setError] = useState('');
    const {userRegister, userProfileUpdate} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;
        const photo = form.photo.value;

        setError('')
        if(password.length < 8){
            return setError("Password must be at least 8 characters")
        }
        else if(!/(?=.*[a-z])(?=.*[A-Z])/.test(password)){
            return setError("Password must be one uppercase letter and one lowercase letter");
        }
        else if(password !== confirm){
            return setError("Password not match");
        }
        console.log(email, password);
        userRegister(email, password)
        .then(result => {
            const loggedUser = result.user;
            userProfileUpdate(name, photo)
            .then(() => {})
            .catch(err => {setError(err.message)})
            form.reset();
            swal({
                title: "Register Successful!"
            });
            navigate('/')

        })
        .catch(err => {
            setError(err.message);
        })
    };
    return (
        <div className='max-w-screen-sm mx-auto shadow-lg rounded-xl bg-slate-100 my-20'>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <p className='text-red-600'>{Error}</p>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' required placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name='photo' required placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" name='confirm' required placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Register</button>
                </div>
                <div className='form-control mt-8 flex flex-row justify-between'>
                    <span>
                        Do you have an account? <Link to="/login" className='text-yellow-400 hover:underline cursor-pointer'>Login here</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Register;