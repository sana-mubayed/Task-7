import './PartnersLogos.css';
import { Container, Row } from 'react-bootstrap';
import brand1 from './../../assets/images/brandLogo1_1.svg';
import brand2 from './../../assets/images/brandLogo1_2.svg';
import brand3 from './../../assets/images/brandLogo1_3.svg';
import brand4 from './../../assets/images/brandLogo1_4.svg';
import brand5 from './../../assets/images/brandLogo1_5.svg';

export default function PartnersLogos() {
    return (
        <div className="brand-slider-container">
            <Container>
                    <div className="brands-section d-flex justify-content-between">
                        <div className="brand-item none">
                            <div className="brand-image">
                                <img src={brand1} alt="Brand 1" />
                            </div>
                        </div>
                        <div className="brand-item none">
                            <div className="brand-image">
                                <img src={brand2} alt="Brand 2" />
                            </div>
                        </div>
                        <div className="brand-item d-block">
                            <div className="brand-image">
                                <img src={brand3} alt="Brand 3" />
                            </div>
                        </div>
                        <div className="brand-item none">
                            <div className="brand-image">
                                <img src={brand4} alt="Brand 4" />
                            </div>
                        </div>
                        <div className="brand-item none">
                            <div className="brand-image">
                                <img src={brand5} alt="Brand 5" />
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    )
}
