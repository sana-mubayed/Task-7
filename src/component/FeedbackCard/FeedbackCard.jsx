import './FeedbackCard.css'
import { CiStar } from "react-icons/ci";
import { FaStar } from 'react-icons/fa';
import { RiDoubleQuotesR } from "react-icons/ri";
import testimonialShape3_1 from './../../assets/images/testimonialShape3_1.webp';


export default function FeedbackCard({  title, designation,src }) {
    return (
        <div className="testimonial-card style3">
            <ul className="star-wrap">
                <li><FaStar className="icon-yellow" /></li>
                <li><FaStar className="icon-yellow" /></li>
                <li><FaStar className="icon-yellow" /></li>
                <li><FaStar className="icon-yellow" /></li>
                <li><CiStar /></li>
            </ul>
            <p className="text">
                "I've been using Extech for several months now, and I'm extremely
                impressed with the ease of customization it offers. The wide range of
                templates."

            </p>
            <div className="profile-box">
                <div className="testi-thumb">
                    <img src={src} />
                </div>
                <div className="testi-content">
                    <h3 className="title">{title}</h3>
                    <div className="designation">{designation}</div>
                </div>
            </div>
            <div className="quote">
                <RiDoubleQuotesR />
            </div>
            <div className="shape3_1">
                <img src={testimonialShape3_1} alt="shape" />
            </div>
        </div>
    )
}
