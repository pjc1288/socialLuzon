import React, {useState} from 'react'

import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import { Paragraph, colors } from '../../styles/globalStyles';
import {BiShareAlt} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'
import Modal from 'react-modal'

const Card = ({ blog }) => {


    const [shareModalIopen, setShareModalIopen] = useState(false)


    return (
        <div className="lead pb-4">



            <div className="row">

                <Modal 
                    isOpen={shareModalIopen} 
                    onRequestClose={()=>setShareModalIopen(false)}
                    style={
                        {
                            overlay:{
                                backgroundColor:'white',
                                padding: '-20px',
                                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                                margin:'190px 20px 140px 20px',
                                borderRadius:'10px'

                               
                            },
                            content:{
                                margin:'-20px',
                                backgroundColor:'white',
                                color:'green',
                                border:'none'
                            }
                        }
                    }>

                    <h2>Modal Share</h2>
                    <p>Modal Body</p>
                    <div>
                        <button onClick={()=> setShareModalIopen(false)}>Cerrar</button>
                    </div>
                </Modal>


                <div className="col-md-4">
                <section>
                        <img
                            className="img img-fluid"
                            style={{ maxHeight: 'auto', width: '100%', borderRadius:'5px' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />



                <div style={{display:'flex', flexDirection:'row', backgroundColor:`${colors.gray1}`,padding:'10px',alignItems:'center', marginTop:'-10px', borderRadius:'5px'}}>
                        <Link href={`/blogs/${blog.slug}`}>
                        <div style={{width:'400px', fontSize:'16px', textAlign:'left'}}>{blog.title}</div>
                         </Link>
                         <div style={{width:'60px', lineHeight:'75px', textAlign:'center'}}>
                             <button onClick={()=>setShareModalIopen(true)}>
                             
                             
                             
                             
                             <BiShareAlt/>
                             
                             </button>
                             
                             
                             </div>






                        <div style={{width:'60px', lineHeight:'75px', textAlign:'center'}}><FiBell/></div>                        
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