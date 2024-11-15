import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import './Pricing.css'
import pricingIcon1_2 from './../../assets/images/pricingIcon1_2.svg';
import { Col, Container, Row } from 'react-bootstrap';
import PricingCard from "../PricingCard/PricingCard";

export default function Pricing() {
    return (
        <section className="pricing-section ">
            <Container>
                <div className="title-section mb-3">
                    <div className="subtitle3 d-flex justify-content-center">
                        <HiOutlineArrowLongLeft className='icon-blue' />
                        <span className="pricing-title">Our Pricing</span>
                        <HiOutlineArrowLongRight className='icon-blue' />
                    </div>
                    <h2 className="pricing-subtitle text-center">Our Awesome Pricing Plans</h2>
                    <div className="pricing-toggle-container d-flex justify-content-center align-items-center">
                        <ul className="pricing-toggle-nav mb-3 d-flex justify-content-center align-items-center">
                            <li className="pricing-toggle-item">
                                <button className="nav-link active">Monthly</button>
                            </li>
                            <li className="pricing-toggle-item" role="presentation">
                                <button className="nav-link">Yearly</button>
                            </li>
                        </ul>
                        <img src={pricingIcon1_2} alt="pricing-icon" className="pricing-icon" />
                        <span className="pricing-save-label">Save 25%</span>
                    </div>
                </div>
                <Row className="gy-5">
                    <Col xl={4} md={6}>
                        <PricingCard />
                    </Col>
                    <Col xl={4} md={6}>
                        <PricingCard />
                    </Col>
                    <Col xl={4} md={6}>
                        <PricingCard />
                    </Col>
                </Row>
            </Container>

        </section>

    )
}
