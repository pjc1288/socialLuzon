import Admin from '../../../components/auth/Admin';
import Link from 'next/link';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';

const CategoryTag = () => {
    return (

            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage Categories and Tags</h2>
                        </div>
                        <div className="col-md-6">
                            <Category />
                            <Tag />
                        </div>
                        <div className="col-md-6">
                            <p>tag</p>
                        </div>
                    </div>
                </div>
            </Admin>
    );
};

export default CategoryTag;