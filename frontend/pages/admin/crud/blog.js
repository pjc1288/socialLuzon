
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';
import { Title } from '../../../styles/globalStyles';

const Blog = () => {
    return (

            <Admin>
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <Title>Nuevo Contenido a Difundir</Title>
                        </div>
                        <div className="col-md-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
            </Admin>
    );
};

export default Blog;