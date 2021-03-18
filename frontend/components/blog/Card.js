import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const Card = ({ blog }) => {



    return (
        <div className="lead pb-4">
            <header>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
                    </a>
                </Link>
            </header>

            <div className="row">
                <div className="col-md-4">
                <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: 'auto', width: '100%', borderRadius:'5px' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </section>
                </div>

                <div className='col-md-8'>
                    <section>
                      <div className='pb-3'>
                        {blog.excerpt == undefined ? '' : renderHTML(blog.excerpt)}
                      </div>
                      <Link href={`/blogs/${blog.slug}`}>
                        <a className='btn btn-primary pt-2'>Read more</a>
                      </Link>
                    </section>
                    </div>
                </div>
        
        </div>
    );
};

export default Card;