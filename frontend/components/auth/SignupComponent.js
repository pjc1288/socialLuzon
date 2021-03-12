import { useState } from 'react';
import {Input} from '../../styles/globalStyles'

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

    const handleSubmit = e => {
        e.preventDefault();
        console.table({ name, email, password, error, loading, message, showForm });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const signupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        value={name}
                        onChange={handleChange('name')}
                        type="text"
                        placeholder="Nombre"
                    />
                </div>

                <div>
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        placeholder="Escribe tu contraseña"
                    />
                </div>

                <div>
                    <button>Signup</button>
                </div>
            </form>
        );
    };

    return <>{signupForm()}</>;
};

export default SignupComponent;