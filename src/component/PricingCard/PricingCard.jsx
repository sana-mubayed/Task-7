import './PricingCard.css'
import pricingIcon1_1 from './../../assets/images/pricingIcon1_1.svg';
import { GiCheckMark } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
export default function PricingCard() {
    return (
        <div className="pricing-card style1">
            <div className="pricing-card_header">
                <div className="item">
                    <h4>Regular Plans</h4>
                    <div className="price">
                        <h2>$49</h2><span>/ Month</span>
                    </div>
                </div>
                <div className="item">
                    <img src={pricingIcon1_1} alt="icon" />
                </div>
            </div>
            <div className="pricing-card_body">
                <div className="checklist-wrapper">
                    <ul className="checklist style1">
                        <li><GiCheckMark className='icon-blue' /> 100 GB SSD Storage</li>
                        <li><CiCircleQuestion /></li>
                    </ul>
                    <ul className="checklist style1">
                        <li><GiCheckMark className='icon-blue' /> Weekly Backups </li>
                        <li><CiCircleQuestion /></li>
                    </ul>
                    <ul className="checklist style1">
                        <li><GiCheckMark className='icon-blue' />Unlimited Free SSL</li>
                        <li><CiCircleQuestion /></li>
                    </ul>
                    <ul className="checklist style1">
                        <li><GiCheckMark className='icon-blue' />24/7 system Monitoring</li>
                        <li><CiCircleQuestion /></li>
                    </ul>
                    <ul className="checklist style1">
                        <li><GiCheckMark className='icon-blue' /> Free Domain ($9.99 value) </li>
                        <li><CiCircleQuestion /></li>
                    </ul>
                    <ul className="checklist style1">
                        <li><IoCloseSharp className='icon-red' /> Frame 164236 </li>
                        <li><CiCircleQuestion /></li>
                    </ul>
                    <ul className="checklist style1">
                        <li><IoCloseSharp className='icon-red' /> 20+ Payment Methods </li>
                        <li><CiCircleQuestion /></li>
                    </ul>
                </div>
                <div className="btn-wrapper">
                    <Link  className="gt-btn style2 w-100">Get Started Now <HiOutlineArrowLongRight/></Link>
                </div>
            </div>
        </div>
    )
}
