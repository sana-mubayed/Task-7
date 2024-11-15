import './EdgeImage.css'
import ctaThumb from './../../assets/images/ctaThumb.webp';
// import ctaThumb2 from './../../assets/images/ctaShape2_3.webp';
import ctaThumb3 from './../../assets/images/ctaShape2_4.webp';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function EdgeImage() {
    return (
        <section className="cta-section pb-0">
            <div className="container">
                <div className="cta-wrap style2">
                    {/* <div className="shape1_3 d-none d-xl-block"><img src={ctaThumb2} alt="shape" /></div> */}
                    <div className="shape1_4 d-none d-xl-block"><img src={ctaThumb3} alt="shape" /></div>
                    <div className="cta-thumb d-none d-xl-block"><img src={ctaThumb} alt="thumb" /></div>
                    <h3 className="cta-title text-white">Stay Connected With Cutting Edge IT</h3>
                    <div className="btn-wrapper">
                        <Link className="gt-btn style5" >Talk to a Specialist<HiOutlineArrowNarrowRight className='icon-black' /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
