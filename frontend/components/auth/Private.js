import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../components/actions/auth';

const Private = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/signin`);
        }
    }, []);
    return <>{children}</>;
};

export default Private;