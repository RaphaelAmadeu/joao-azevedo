import "./index.scss";

import { useEffect } from 'react';

export default function Background({active, mobile}) {

    useEffect(() => {
        const column = document.querySelector('.background-column');
        
        column.style.left = 0;

        if(active && mobile) {
            column.style.left = '-85%';
        } else if (mobile) {
            column.style.left = 0;
        }
    }, [active, mobile])

    return (
        <div className="background">
            <div className="background-container">
                <div className="background-column"></div>
                <div data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in"
                    className="background-block-1 background-block"></div>
                <div data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in"
                    className="background-block-2 background-block"></div>
            </div>
        </div>
    )
}