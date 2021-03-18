
import Head from 'next/head';
import Link from 'next/link';
import { singleCategory } from '../../components/actions/category';
import { API } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';
import Carousel, {type, onClick,} from "react-elastic-carousel";
import {colors} from '../../styles/globalStyles'
import styled from 'styled-components';

const Item= styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  border-bottom: 5px solid ${colors.secondaryLight};
  background-color: transparent;
  color: ${colors.black};
  margin: 15px;
  font-size: 1em;
`;



const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

const Category = ({ category, blogs }) => {
    return (
        <>

                <main>

                <section  style={{margin:'120px 20px 0 20px'}}>
                            <Carousel breakPoints={breakPoints}>
                            <Link href='/categories/eventos'><Item>Eventos</Item></Link>
                            <Link href='/categories/noticias'><Item>Noticias</Item></Link>
                            <Link href='/categories/fotos'><Item>Fotos</Item></Link>
                            <Link href='/categories/investigaciones'><Item>Investigación</Item></Link>
                            <Link href='/categories/proyectos'><Item>Proyectos</Item></Link>
                            </Carousel>
                            </section>
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