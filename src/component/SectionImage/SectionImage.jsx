import { Col, Container, Row } from 'react-bootstrap'
import './SectionImage.css'
import ctaShape1_1 from './../../assets/images/ctaShape1_1.webp';
import ctaThumb1_1 from './../../assets/images/ctaThumb1_1.webp';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export default function SectionImage() {
    return (
        <section className="cta-section">
            <Container>
                <div className="cta-wrap">
                    <div className="shape"><img src={ctaShape1_1} alt="shape" /></div>
                    <Row className='gy-5'>
                        <Col xl={3}>
                            <img src={ctaThumb1_1} alt="thumb" />
                        </Col>
                        <Col xl={3} className='d-flex align-items-center'>
                            <div className="section-title">
                                <div className="subtitle4"><HiOutlineArrowLongLeft className='icon-white' /><span className="text-white"> Contact US</span>
                                    <HiOutlineArrowLongRight className='icon-white' /></div>
                                <h2 className="cta-title">24/7 Expert Hosting Support Our Customers Love</h2>
                            </div>
                        </Col>
                        <Col xl={3} className='d-flex align-items-center'>
                            <div className="btn-wrapper">
                                <Link className="gt-btn style5">Talk to a Specialist <FaArrowRightLong className='icon-black' /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}
