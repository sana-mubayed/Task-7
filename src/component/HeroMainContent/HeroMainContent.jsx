import { FaStar } from 'react-icons/fa';
import './HeroMainContent.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PiWaveTriangleBold } from 'react-icons/pi';
import { Container, Row, Col } from 'react-bootstrap';
import setProfiles from './../../assets/images/profileShape1_1.webp';
import heroThumb1 from './../../assets/images/heroThumb1_1.webp';
import heroShape1 from './../../assets/images/heroShape1_1.webp';
import { GiCheckMark } from 'react-icons/gi';


export default function HeroMainContent() {
    return (
        <Container className='container-HeroMain'>
            <div className='HeroMain'>
                <Container>
                    <Row className='d-flex align-items-center align-items-xl-start'>
                        <Col xl={6} className="order-2 order-xl-1">
                            <div className="left-side">
                                <h6 className="subtitle">
                                    <PiWaveTriangleBold /> Everything You Need to Create A Website
                                </h6>
                                <h1 className="title">
                                    Business Innovation With IT Services Expertise
                                </h1>
                                <div className='list-group align-items-start flex-row flex-sm-column'>
                                    <ul className="list">
                                        <li><GiCheckMark />Deployment and Support</li>
                                        <li><GiCheckMark />Discovery and Analysis</li>
                                    </ul>
                                    <ul className="list">
                                        <li><GiCheckMark /> Flexibility and Adaptability</li>
                                        <li><GiCheckMark /> Competitive Advantage</li>
                                    </ul>
                                </div>
                                <div className="button-hero">
                                    <button >GET STARTED<FaArrowRightLong /></button>
                                </div>
                                <div className="review-section">
                                    <div className="review-item">
                                        <div className="review-platform">
                                            <FaStar className='icon-green' /> Trustpilot
                                        </div>
                                        <div className="review-content">
                                            <div className="review-image">
                                                <img src={setProfiles} alt="shape" />
                                            </div>
                                            <div className="review-details">
                                                <div className="review-stars">
                                                    <FaStar className='icon-yellow' />
                                                    <FaStar className='icon-yellow' />
                                                    <FaStar className='icon-yellow' />
                                                </div>
                                                <h6 className="review-count">450+ reviews</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-item border-0">
                                        <div className="review-platform">
                                            Google
                                        </div>
                                        <div className="review-content">
                                            <div className="review-image">
                                                <img src={setProfiles} alt="shape" />
                                            </div>
                                            <div className="review-details">
                                                <div className="review-stars">
                                                    <FaStar className='icon-yellow' />
                                                    <FaStar className='icon-yellow' />
                                                    <FaStar className='icon-yellow' />
                                                </div>
                                                <h6 className="review-count">450+ reviews</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} className="order-1 order-xl-2 justify-content-center">
                            <div className="right-side">
                                <div className="hero-img">
                                    <img src={heroThumb1} alt="" />
                                </div>
                                <div className="bg-heroImg d-none d-xxl-block"><img src={heroShape1} alt="shape" /></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>

    )
}
