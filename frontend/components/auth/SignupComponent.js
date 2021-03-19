import { useState, useEffect } from 'react';
import { signup, isAuth } from '../actions/auth';
import Router from 'next/router';
import { Buttons, InputForm, Paragraph, Title } from '../../styles/globalStyles';

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
            <>
            <Title big lessMargin className="text-center pt-4 pb-4"> Únete a Nosotros</Title>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputForm
                        value={name}
                        onChange={handleChange('name')}
                        type="text"
                        placeholder="Nombre"></InputForm>
                    
                </div>

                <div>
                    <InputForm
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        placeholder="Email"></InputForm>
                    
                </div>

                <div>
                    <InputForm
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        placeholder="Password"></InputForm>
                    
                </div>

                <div>
                <Buttons style={{margin:'50px'}} medium contained>Unirse</Buttons>
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
            {showForm && signupForm()}
        </>
    );
};

export default SignupComponent;