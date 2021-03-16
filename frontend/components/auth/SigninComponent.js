import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../actions/auth';

import Router from 'next/router';
import { Buttons, InputForm, Paragraph } from '../../styles/globalStyles';

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
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
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
            <>
            <Paragraph big lessMargin className="text-center pt-4 pb-4"> Inicie Sesión para continuar.</Paragraph>
            <form onSubmit={handleSubmit}>
                
                    <InputForm
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                    ></InputForm>
                

                
                    <InputForm
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        ></InputForm>
               
                <Paragraph big lessMargin primaryLight className="text-center pt-4 pb-4"> ¿Has olvidado tu contraseña?</Paragraph>
                <div style={{textAlign: 'center', margin:'40px 0px'}}>
                    <Buttons  medium contained>Iniciar Sesión</Buttons>
                </div>
            </form>

            </>
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