import React, {useState} from 'react'

import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import { Paragraph, colors, Title2,InputForm, Buttons } from '../../styles/globalStyles';
import {BiShareAlt} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'
import Modal from 'react-modal'

const Card = ({ blog }) => {


    const [shareModalIopen, setShareModalIopen] = useState(false)
    const [bellModalIopen, setBellModalIopen] = useState(false)
    const [thanksModalIopen, setThanksModalIopen] = useState(false)


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
                                margin:'200px 20px 200px 20px',
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

                    <Title2 style={{
                        position: 'relative',
                        top: '50px',
                        left: '63px',
                        height: '25%',
                        textAlign:'center',
                        margin: '-10% 0 0 -50%',}
                    }>Comparte en tus redes</Title2>
                     <a href='http://instagram.com' target='_blank'>
                    <img src='/RRSS.png' alt='share' style={{
                        position: 'relative',
                        top: '90px',
                        left: '80px',
                        height: '25%',
                        margin: '-15% 0 0 -25%',}
                    }>
                    </img>
                        </a>
                    <div>
                        <button onClick={()=> setShareModalIopen(false)} style={{
                            fontSize:'20px',
                            backgroundColor:'transparent',
                            border:'none',
                            color:'gray',
                            position: 'absolute',
                            top: '0px',
                            right: '0px',
                            outline:'none'
                        }}>X</button>
                    </div>

                    <Buttons style={{marginLeft:'50px', marginTop: '150px'}} contained secondary small button onClick={()=> {setThanksModalIopen(true); setShareModalIopen(false)}} >
                        Listo
                    </Buttons>
                </Modal>
                


                <Modal 
                    isOpen={bellModalIopen} 
                    onRequestClose={()=>setBellModalIopen(false)}
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
                                
                                border:'none'
                            }
                        }
                    }>
                    <Title2 style={{
                        position: 'relative',
                        
                        left: '63px',
                        height: '15%',
                        textAlign:'center',
                        margin: '-10% 0 0 -50%',}
                    }>¿Cuando quieres compartir?</Title2>
                     <label for="date">¿Qué Día?</label>
                        
                        <InputForm type="date" id="date" name="trip-start"></InputForm>
                        <label for="time">¿A que hora?</label>
                        <InputForm type="time" id="date" name="trip-start"></InputForm>

                        <Buttons style={{marginLeft:'50px', marginTop: '20px'}} contained secondary small button onClick={()=> {setThanksModalIopen(true); setBellModalIopen(false)}} >
                            Listo
                        </Buttons>
                   
                   
                   
                    <div>
                        <button onClick={()=> setBellModalIopen(false)} style={{
                            fontSize:'20px',
                            backgroundColor:'transparent',
                            border:'none',
                            color:'gray',
                            position: 'absolute',
                            top: '0px',
                            right: '0px',
                        }}>X</button>
                    </div>
                </Modal>
                
                <Modal 
                    isOpen={thanksModalIopen} 
                    onRequestClose={()=>setThanksModalIopen(false)}
                    style={
                        {
                            overlay:{
                                backgroundColor:'#FFAA99',
                                padding: '-20px',
                                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                                margin:'190px 20px 140px 20px',
                                borderRadius:'10px'

                               
                            },
                            content:{
                                margin:'-20px',
                                backgroundColor:' #FFAA99',
                                
                                border:'none'
                            }
                        }
                    }>
                    <a href='http://instagram.com' target='_blank'>
                    <img src='/gracias.png' alt='share' style={{
                        width:'250px'

                    }}>
                    </img>
                    </a>
                     

                   
                   
                   
                    <div>
                        <button onClick={()=> setThanksModalIopen(false)} style={{
                            fontSize:'20px',
                            backgroundColor:'transparent',
                            border:'none',
                            color:'gray',
                            position: 'absolute',
                            top: '0px',
                            right: '0px',
                        }}>X</button>
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
                             <button onClick={()=>setShareModalIopen(true)} style={{
                            fontSize:'20px',
                            backgroundColor:'transparent',
                            border:'none',
                            outline:'none',
                        }}>
                             
                             
                             
                             
                             <BiShareAlt/>
                             
                             </button>
                             
                             
                             </div>






                        <div style={{width:'60px', lineHeight:'75px', textAlign:'center'}}>
                        <button onClick={()=>setBellModalIopen(true)} style={{
                            fontSize:'20px',
                            backgroundColor:'transparent',
                            border:'none',
                            outline:'none',
                        }}>
                            <FiBell/>
                            </button>
                        </div>                        
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