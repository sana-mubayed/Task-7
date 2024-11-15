import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import './ServiceCard.css';

function ServiceCard({ icon, title }) {
    return (
        <div className="service-card">
            <div className="icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="body">
                <h3>{title}</h3>
                <p>Collaboratively formulate principle capital. Progressively evolve user
                    revolutionary hosting services.</p>
                <button className="link-btn">Read more <FiChevronsRight /></button>
            </div>
        </div>
    );
}

export default ServiceCard;
