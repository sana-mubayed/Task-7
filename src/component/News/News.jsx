import './News.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import blogProfile1_2 from './../../assets/images/blogProfile1_2.webp';
import blogProfile1_3 from './../../assets/images/blogProfile1_3.webp';
import blogProfile1_1 from './../../assets/images/blogProfile1_1.webp';
import blogImage1 from './../../assets/images/blogThumb1_2.webp';
import blogImage2 from './../../assets/images/blogThumb1_3.webp';
import blogImage3 from './../../assets/images/blogThumb1_1.webp';
import NewsCard from '../NewsCard/NewsCard';

export default function News() {
    const blogData = [
        {
            imageSrc: blogImage1,
            tag: " Uncategorized",
            date: "MARCH 29, 2024",
            title: "Best and fastest data server ever",
            authorImage: blogProfile1_2,

        },
        {
            imageSrc: blogImage2,
            tag: "Technology",
            date: "MARCH 29, 2024",
            title: "Life won’t one beast air over above all",
            authorImage: blogProfile1_3,

        },
        {
            imageSrc: blogImage3,
            tag: "Shared Hosting",
            date: "MARCH 24, 2024",
            title: "Attentive was born in 2015 help sales teams",
            authorImage: blogProfile1_1,

        }
    ];

    return (

        <section className='newssection'>
            <Container>
                <div className='title-group mb-5'>
                    <div className='section-title'>
                        <div className='subtitle2'>
                            <HiOutlineArrowNarrowLeft className='icon-blue' />
                            <span>Blog & News</span>
                            <HiOutlineArrowNarrowRight className='icon-blue' />
                        </div>
                        <h2 className='title2'>Featured News And Insights</h2>
                    </div>
                    <div className="arrow-btn text-end">
                        <button className="slider-arrow style1"><FaArrowLeft /></button>
                        <button className="slider-arrow style1 slider-next"><FaArrowRight /></button>
                    </div>
                </div>
                <Row>
                    {blogData.map((blog, index) => (
                        <Col xl={4} md={4} key={index}>
                            <NewsCard
                                imageSrc={blog.imageSrc}
                                tag={blog.tag}
                                date={blog.date}
                                title={blog.title}
                                authorImage={blog.authorImage}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
