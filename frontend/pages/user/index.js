import Private from '../../components/auth/Private';
import Link from 'next/link';

const UserIndex = () => {
    return (
            <Private>
                <h2>Panel Control usuario</h2>
            </Private>
    );
};

export default UserIndex;
