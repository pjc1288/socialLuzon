
import Head from 'next/head';
import Link from 'next/link';
import { singleCategory } from '../../components/actions/category';
import { API } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';

const Category = ({ category, blogs }) => {
    return (
        <>

                <main>
                    <div className="container-fluid text-center">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="display-4 font-weight-bold">{category.name}</h1>
                                {blogs.map((b, i) => (
                                    <div>
                                        <Card key={i} blog={b} />
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </header>
                    </div>
                </main>

        </>
    );
};

Category.getInitialProps = ({ query }) => {
    return singleCategory(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { category: data.category, blogs: data.blogs };
        }
    });
};

export default Category;