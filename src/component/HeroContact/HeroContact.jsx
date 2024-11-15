import { FaChevronRight } from 'react-icons/fa6'
import './HeroContact.css'
import photo2 from './../../assets/images/line-element.webp'
import photo1 from './../../assets/images/element.webp'

export default function HeroContact({ title }) {
    return (
        <div className="HeroContact">
            <div className="border-shape">
                <img src={photo1} alt="Shape 1" />
            </div>
            <div className="line-shape">
                <img src={photo2} alt="Shape 2" />
            </div>
            <div className="ContactContent">
                <h1>{title}</h1>
                <ul className="list-items4">
                    <li>Home</li>
                    <li><FaChevronRight /></li>
                    <li>{title}</li>
                </ul>
            </div>
        </div>
    );
}