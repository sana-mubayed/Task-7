import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import './NewsCard.css'

export default function NewsCard({ imageSrc, tag, date, title, authorImage }) {
    return (
        <div className='blog-card'>
            <div className='image-wrapper'>
                <img src={imageSrc} alt="blog thumbnail" />
            </div>
            <div className="blog-card-body">
                <div className="blog-meta">
                    <div className="tag">{tag}</div>
                    <div className="date">{date}</div>
                </div>
                <h3>{title}</h3>
                <div className="author-meta">
                    <div className="fancy-box style1">
                        <div className="item">
                            <img src={authorImage} alt="author" />
                        </div>
                        <div className="item">
                            <h6>Admin</h6>
                            <p>Co, Founder</p>
                        </div>
                    </div>
                    <button className='link-btn style1'>
                        <HiOutlineArrowNarrowRight className='icon-black' />
                    </button>
                </div>
            </div>
        </div>
    )
}
