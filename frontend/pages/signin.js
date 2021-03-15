import SigninComponent from '../components/auth/SigninComponent';
import Link from 'next/link';
import { Paragraph, Title } from '../styles/globalStyles';

const Signin = () => {
    return (
        <>
            <Title className="text-center pt-4 pb-4" >Iniciar Sesión</Title>
            
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SigninComponent />

                    <Paragraph medium lessMargin className="text-center pt-4 pb-4"> 
                    ¿Eres nuevo En solcial Luzon?</Paragraph>
                    <Link href='/signup'>
                    <Paragraph medium lessMarginTop primaryLight className="text-center pt-4 pb-4"> Unete Ahora</Paragraph>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Signin;