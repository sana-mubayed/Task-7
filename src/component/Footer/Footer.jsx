import './Footer.css'
import { FaArrowRight, FaFacebookF, FaInstagram, FaRegCopyright, FaTwitter, FaYoutube } from "react-icons/fa";
import footer_1 from './../../assets/images/footerThumb1_1.webp';
import footer_2 from './../../assets/images/footerThumb1_2.webp';
import Extech from './../../assets/images/logo.svg';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="footer-area">
            <div className="widget-area">
                <Container>
                    <div className="footer-layout style1">
                        <Row>
                            <Col xl={3} md={6} >
                                <div className="widget footer-widget">
                                    <div className="gt-widget-about">
                                        <div className="about-logo">
                                            <Link ><img src={Extech} alt="extech" /></Link>
                                        </div>
                                        <p className="about-text"> Extexh IT is a Phasellus ultricies aliquam volutpat ullamcorper
                                            laoreet neque, a lacinia curabitur lacinia mollis
                                        </p>
                                        <div className="gt-social style2">
                                            <Link><FaFacebookF /></Link>
                                            <Link ><FaTwitter /></Link>
                                            <Link ><FaYoutube /></Link>
                                            <Link><FaInstagram /></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} md={6}>
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><Link ><FiChevronsRight />Extech About</Link></li>
                                            <li><Link><FiChevronsRight />Our Services</Link></li>
                                            <li><Link ><FiChevronsRight />Our Blogs</Link></li>
                                            <li><Link ><FiChevronsRight />FAQ’S</Link></li>
                                            <li><Link ><FiChevronsRight />Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} md={6}>
                                <div className="widget widget_nav_menu footer-widget" >
                                    <h3 className="widget_title">Recent Posts</h3>
                                    <div className="recent-post-wrap">
                                        <div className="recent-post">
                                            <div className="media-img">
                                                <Link ><img src={footer_1} alt="thumb" /></Link>
                                            </div>
                                            <div className="media-body">
                                                <div className="recent-post-meta">
                                                    <Link ><FaRegCalendarAlt />15th April, 2024</Link>
                                                </div>
                                                <h4 className="post-title"><Link className="text-inherit" >Top 5 Most
                                                    Famous Technology Trend In 2024</Link>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="recent-post">
                                            <div className="media-img">
                                                <Link ><img src={footer_2} alt="thumb" /></Link>
                                            </div>
                                            <div className="media-body">
                                                <div className="recent-post-meta">
                                                    <Link><FaRegCalendarAlt />15th April, 2024</Link>
                                                </div>
                                                <h4 className="post-title"><Link className="text-inherit">Top 5 Most
                                                    Famous Technology Trend In 2024</Link>
                                                </h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} md={6}>
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Contact Us</h3>
                                    <div className="checklist style2">
                                        <ul className="ps-0">
                                            <li className="text-white"><MdEmail /></li>
                                            <li className="text-white">info@example.com</li>
                                        </ul>
                                        <ul className="ps-0">
                                            <li className="text-white"><FaPhoneAlt /></li>
                                            <li className="text-white">+208-6666-0112</li>
                                        </ul>
                                        <div className="email-input-container">
                                            <input type="email" id="email" placeholder="Your email address" required="" />
                                            <button type="submit" id="submitButton" disabled=""><FaArrowRight /></button>
                                        </div>
                                        <form id="termsForm">
                                            <label className="custom-checkbox">
                                                <input type="checkbox" name="agree" id="agreeCheckbox" />
                                                <span className="checkmark"></span>
                                                I agree to the <Link className="text-underline">Privacy
                                                    Policy.</Link>
                                            </label>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="copyright-wrap">
                <Container>
                    <div className="copyright-layout">
                        <div className="layout-text">
                            <p className="copyright">
                                <FaRegCopyright /> All Copyright 2024 by Extech
                            </p>
                        </div>
                        <div className="layout-link">
                            <div className="link-wrapper">
                                <Link >Terms &amp; Condition </Link>
                                <Link >Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
