import { Container, Row } from 'react-bootstrap'
import './ServicesSection.css'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ServiceCard from '../ServiceCard/ServiceCard';
import icon1 from './../../assets/images/serviceIcon1_2.svg';
import icon2 from './../../assets/images/serviceIcon1_3.svg';
import icon3 from './../../assets/images/serviceIcon1_4.svg';
import icon4 from './../../assets/images/serviceIcon1_1.svg';



export default function ServicesSection() {
    return (
        <section className='ServicesSection'>
            <Container>
                <div className='title-group mb-5'>
                    <div className='section-title'>
                        <div className='subtitle2'>
                            <HiOutlineArrowNarrowLeft className='icon-blue' />
                            <span>Our Services</span>
                            <HiOutlineArrowNarrowRight className='icon-blue' />
                        </div>
                        <h2 className='title2'>Elevating Businesses with IT Ingenuity</h2>
                    </div>
                    <div className="arrow-btn text-end">
                        <button className="slider-arrow style1"><FaArrowLeft /></button>
                        <button className="slider-arrow style1 slider-next"><FaArrowRight /></button>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-between gap-3'>
                    <ServiceCard className="d-block"
                        icon={icon1}
                        title="Woo Commerce"
                    />
                    <div className="none">
                        <ServiceCard
                            icon={icon2}
                            title="CRM Solutions"
                        />

                    </div>
                    <div className="none">
                        <ServiceCard
                            icon={icon3}
                            title="Web Design"
                        />
                    </div>
                    <div className="none">
                        <ServiceCard
                            icon={icon4}
                            title="Data Guard Sentinel"
                        />
                    </div>

                </div>
            </Container>
        </section>

    )
}
