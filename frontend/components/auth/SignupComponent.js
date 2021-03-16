import { useState, useEffect } from 'react';
import { signup, isAuth } from '../actions/auth';
import Router from 'next/router';
import { Buttons, InputForm } from '../../styles/globalStyles';

const SignupComponent = () => {
    const [values, setValues] = useState({
        name: 'Pedro',
        email: 'pedro@gmail.com',
        password: '123456',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { name, email, password };

        signup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
               
                    <InputForm
                        value={name}
                        onChange={handleChange('name')}
                        type="text"
                        placeholder="Nombre"
                    ></InputForm>
           

               
                    <InputForm
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        placeholder="Email"
                    ></InputForm>
               

               
                    <InputForm
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        placeholder="Contraseña"
                    ></InputForm>
                

                <div style={{textAlign: 'center', margin:'40px 0px'}}>
                    <Buttons medium contained>Regístrarte</Buttons>
                </div>
            </form>
        );
    };

    return (
        <>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
        </>
    );
};

export default SignupComponent;