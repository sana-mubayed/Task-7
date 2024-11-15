import './Steps.css'
import { Col, Container, Row } from 'react-bootstrap'


export default function Steps() {
    return (
        <section className="process-section bg-DarkBlue">
            <div className="process-wrapper">
                <Container>
                    <Row className='process-steps'>
                        <Col xl={3}>
                            <div className='process-step'>
                                <div className='step-number'>01</div>
                                <h3 className='step-title'>Requirement</h3>
                                <p className='step-description'>There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration.</p>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='process-step'>
                                <div className='step-number'>02</div>
                                <h3 className='step-title'>UI/UX Design</h3>
                                <p className='step-description'>There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration.</p>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='process-step'>
                                <div className='step-number'>03</div>
                                <h3 className='step-title'>Prototype</h3>
                                <p className='step-description'>There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration.</p>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='process-step'>
                                <div className='step-number'>04</div>
                                <h3 className='step-title'>Development</h3>
                                <p className='step-description'>There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
