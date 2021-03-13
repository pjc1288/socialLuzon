import Private from '../../components/auth/Private';
import Link from 'next/link';

const UserIndex = () => {
    return (
            <Private>
                <h2>User Dashboard</h2>
            </Private>
    );
};

export default UserIndex;
