import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import { Paragraph } from '../../styles/globalStyles';
import {BiShareAlt} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'

const Card = ({ blog }) => {



    return (
        <div className="lead pb-4">



            <div className="row">




                <div className="col-md-4">
                <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: 'auto', width: '100%', borderRadius:'5px' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />



<div style={{display:'flex', flexDirection:'row', backgroundColor:'red',padding:'10px',   alignItems:'center'}}>
                
                        <Link href={`/blogs/${blog.slug}`}>
                    
                        <div style={{backgroundColor:'green', width:'400px', fontSize:'16px', textAlign:'left'}}>{blog.title}</div>
                   
                         </Link>
                         <div style={{backgroundColor:'green', width:'60px', lineHeight:'75px', textAlign:'center'}}><BiShareAlt/></div>
<div style={{backgroundColor:'green', width:'60px', lineHeight:'75px', textAlign:'center'}}><FiBell/></div>

                        
</div>


                    </section>
                </div>







{/*                 <div className='col-md-8'>
                    <section>
                      <div className='pb-3'>
                        {blog.excerpt == undefined ? '' : renderHTML(blog.excerpt)}
                      </div>
                      <Link href={`/blogs/${blog.slug}`}>
                        <a className='btn btn-primary pt-2'>Read more</a>
                      </Link>
                    </section>
                    </div> */}
                </div>
        
        </div>
    );
};

export default Card;