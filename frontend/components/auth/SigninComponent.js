import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../actions/auth';

import Router from 'next/router';

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: 'pedro@gmail.com',
        password: '123456',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;


    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                authenticate(data, () => {
                    Router.push(`/`);
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div>Loading...</div> : '');
    const showError = () => (error ? <div>{error}</div> : '');
    const showMessage = () => (message ? <div>{message}</div> : '');

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div>
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div>
                    <button>Sign In</button>
                </div>
            </form>
        );
    };

    return (
        <>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
        </>
    );
};

export default SigninComponent;