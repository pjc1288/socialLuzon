import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { listBlogsWithCategoriesAndTags } from '../../components/actions/blog';
import Card from '../../components/blog/Card';
import { APP_NAME} from '../../config';
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

const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {




    const head = () => (
        <Head>
            <title>Click Luzon| {APP_NAME}</title>
            <meta
                name="description"
                content="Comparte Difusión"
            />
            <meta property="og:title" content={`Comparte difisión | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Compartir Difusión"
            />
        </Head>
    );

    const [limit, setLimit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
                    Load mmore
                </button>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            // ()
            return (
                <article key={i}>
                    <Card blog={blog} />
                    <hr />
                </article>
            );
        });
    };



    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <article key={i}>
                <Card blog={blog} />
            </article>
        ));
    };

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

                    <div className="container-fluid">{showAllBlogs()}</div>
                    <div className="container-fluid">{showLoadedBlogs()}</div>
                    <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
                </main>
           
        </>
    );
};

Blogs.getInitialProps = () => {
    let skip = 0;
    let limit = 4;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};

export default withRouter(Blogs);