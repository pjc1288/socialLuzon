import SigninComponent from '../components/auth/SigninComponent';
import Link from 'next/link';

const Signin = () => {
    return (
        <>
            <h2 className="text-center pt-4 pb-4">Signin</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SigninComponent />
                </div>
            </div>
        </>
    );
};

export default Signin;