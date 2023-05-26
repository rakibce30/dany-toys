import React, { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import TabTitle from '../../utility/title';

const Login = () => {
    TabTitle("Dany | Login");
    const [Error, setError] = useState('');
    const {userLogin, userGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        userLogin(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
        })
        .catch(err => {
            setError(err.message);
        });
    };

    const handleGoogleLogin = () => {
        userGoogle()
        .then(result => {
            navigate(from)
        })
        .catch(err => {
            setError(err.message);
        });
    }
    return (
        <div className='max-w-screen-sm mx-auto shadow-lg rounded-xl bg-slate-100 my-20'>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <p className='text-red-600'>{Error}</p>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Login</button>
                </div>
                <div className='form-control mt-8 flex flex-row justify-between'>
                    <span onClick={handleGoogleLogin} className='flex flex-row justify-center items-center hover:underline cursor-pointer'><FaGoogle className='mr-2' />Login with Google</span>
                    <span>
                        Don't have an account? <Link to="/register" className='text-yellow-400 hover:underline cursor-pointer'>Register here</Link> 
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;