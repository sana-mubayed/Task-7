import './ready.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Col, Container, Row } from 'react-bootstrap';
import video from './../../assets/images/video.webp';



export default function ready() {
    return (
        <section class="contact-section section-padding">
            <Container>
                <div ClassName="contact-wrapper-2">
                    <Row ClassName="g-4 align-items-center">
                        <Col xl={6}>
                            <div ClassName="contact-left-items">
                                <div ClassName="contact-info-area-2">
                                    <div ClassName="contact-info-items mb-4">
                                        <div ClassName="icon">
                                            <FaPhoneVolume />
                                        </div>
                                        <div ClassName="content">
                                            <p>Call Us 7/24</p>
                                            <h3>
                                                +208-555-0112
                                            </h3>
                                        </div>
                                    </div>
                                    <div ClassName="contact-info-items mb-4">
                                        <div ClassName="icon">
                                            <MdAttachEmail />

                                        </div>
                                        <div ClassName="content">
                                            <p>Make a Quote</p>
                                            <h3>
                                                Infotech@gmail.com
                                            </h3>
                                        </div>
                                    </div>
                                    <div ClassName="contact-info-items border-none">
                                        <div ClassName="icon">
                                            <IoLocationSharp />
                                        </div>
                                        <div ClassName="content">
                                            <p>Location</p>
                                            <h3>
                                                4517 Washington ave.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div ClassName="video-image">
                                    <img src={video} alt="img" />
                                </div>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div ClassName="contact-content">
                                <h2>Ready to Get Started?</h2>
                                <p>
                                    Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in
                                    turpis. Quisque rhoncus, eros in auctor ultrices,
                                </p>
                                <form ClassName="contact-form-items">
                                    <Row className='g-4'>
                                        <Col lg={6}>
                                            <div class="form-clt">
                                                <span>Your name*</span>
                                                <input type="text" name="name" id="name" placeholder="Your Name" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div ClassName="form-clt">
                                                <span>Your Email*</span>
                                                <input type="text" name="email" id="email" placeholder="Your Email" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div ClassName="form-clt">
                                                <span>Write Message*</span>
                                                <textarea name="message" id="message" placeholder="Write Message"></textarea>
                                            </div>
                                        </Col>
                                        <Col lg={7}>
                                            <button type="submit" ClassName="theme-btn">
                                                Send Message <FaArrowRight />
                                            </button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}
