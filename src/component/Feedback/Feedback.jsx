import { Col, Container, Row } from 'react-bootstrap'
import './Feedback.css'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import photo1 from './../../assets/images/testiThumb3_1.webp'
import photo2 from './../../assets/images/testiThumb3_2.webp'
import photo3 from './../../assets/images/testiThumb3_3.webp'


export default function Feedback() {
    const feedbacks = [
        {
            name: 'Kristin Waston',
            designation: 'Web Designer',
            profileImage: photo1,
        },
        {
            name: 'Theresa Webb',
            designation: 'Tech enthusiast',
            profileImage: photo2,
        },
        {
            name: 'Ronald Richards',
            designation: 'Web Enterprenuor',
            profileImage: photo3,
        },
    ];

    return (
        <section className='Feedback-section padding-TB pb-0'>
            <div className="Feedback-wrap style3 padding-TB">
                <Container>
                    <Row>
                        <Col xl={12} className='d-flex justify-content-center'>
                            <div className="section-title2 mb-5 mx-auto">
                                <div className="subtitle6 d-flex justify-content-center">
                                    <HiOutlineArrowLongLeft className='icon-blue' />
                                    <span>Testimonials</span>
                                    <HiOutlineArrowLongRight className='icon-blue' />
                                </div>
                                <h2 className="title4 text-center">Our Latest Client Feedback</h2>
                            </div>
                        </Col>
                        {
                            feedbacks.map((feedback, index) => (
                                <Col xl={4} md={4} key={index}>
                                    <FeedbackCard
                                        title={feedback.name}
                                        designation={feedback.designation}
                                        src={feedback.profileImage}
                                    />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </section>
    )
}
