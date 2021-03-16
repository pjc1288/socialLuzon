  
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';
import { Title } from '../styles/globalStyles';

const Signup = () => {
    return (
        <>
        <Title className="text-center pt-4 pb-4">Únete</Title>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SignupComponent />
                </div>
            </div>
            </>
        
    );
};

export default Signup;