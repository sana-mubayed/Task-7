import './Video.css'
import video from './../../assets/images/video_UiVerse.mp4';
import { IoPlayCircleOutline } from "react-icons/io5";


export default function Video() {
    return (
        <div className="video-container">
            <div className="container">
                <div className="video-box">
                <iframe src="https://www.youtube.com/embed/uWQ_8CtvzoY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="YouTube video" className="video-frame"></iframe>
                </div>
            </div>
        </div>
    )
}
