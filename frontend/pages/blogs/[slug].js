
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { API, APP_NAME} from '../../config';
import { singleBlog, listRelated } from '../../components/actions/blog';
import SmallCard from '../../components/blog/SmallCard';
import renderHTML from 'react-render-html';
import moment from 'moment';

const SingleBlog = ({ blog, query }) => {
    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };


    useEffect(() => {
        loadRelated();
      }, [query]);


    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    const showRelatedBlog = () => {
        return related.map((blog, i) => (
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog={blog} />
                </article>
            </div>
        ));
    };

    return (
        <>


                <main>
                    <article>
                        <div className="container-fluid">
                            <section>
                                <div className="row" style={{ marginTop: '-30px' }}>
                                    <img
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                        className="img img-fluid featured-image"
                                    />
                                </div>
                            </section>

                            <section>
                                <div className="container">
                                    <h1 className="display-2 pb-3 pt-3 text-center font-weight-bold">{blog.title}</h1>
                                    <p className="lead mt-3 mark">
                                        Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}
                                    </p>

                                    <div className="pb-3">
                                        {showBlogCategories(blog)}
                                        {showBlogTags(blog)}
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="container">
                            <section>
                                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                            </section>
                        </div>

                        <div className="container">
                            <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
                            <div className="row">{showRelatedBlog()}</div>
                        </div>

                        <div className="container pb-5">
                            <p>show comments</p>
                        </div>
                    </article>
                </main>
     
        </>
    );
};

SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { blog: data, query };
        }
    });
};

export default SingleBlog;