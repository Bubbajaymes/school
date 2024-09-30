import React, { useRef } from 'react';

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.webp";
import user3 from "../assets/userrr3.jpg";
import user4 from "../assets/user4.jpg";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function Testimonials() {

    const slider = useRef();
    let tx = 0;
    const slideFoward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translate(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translate(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <LeftOutlined onClick={slideFoward} className='back-btn'/>
        <RightOutlined onClick={slideBackward} className='next-btn'/>
        
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user1} alt=''/>
                            <div>
                                <h3>Sumbua Mpole</h3>
                                <span>Kiambiu University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            Proin interdum enim a ultrices posuere. 
                            Proin dignissim maximus dui, nec efficitur nisi condimentum ac. 
                            Duis vitae nibh pharetra, convallis est vel, sollicitudin purus. Curabitur
                             suscipit neque lorem, ac fringilla mauris auctor sed.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user2} alt=''/>
                            <div>
                                <h3>Maggy Keki</h3>
                                <span>Kiambiu University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            Proin interdum enim a ultrices posuere. 
                            Proin dignissim maximus dui, nec efficitur nisi condimentum ac. 
                            Duis vitae nibh pharetra, convallis est vel, sollicitudin purus. Curabitur
                             suscipit neque lorem, ac fringilla mauris auctor sed.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user3} alt=''/>
                            <div>
                                <h3>Quuen Lady</h3>
                                <span>Kiambiu University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            Proin interdum enim a ultrices posuere. 
                            Proin dignissim maximus dui, nec efficitur nisi condimentum ac. 
                            Duis vitae nibh pharetra, convallis est vel, sollicitudin purus. Curabitur
                             suscipit neque lorem, ac fringilla mauris auctor sed.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user4} alt=''/>
                            <div>
                                <h3>Brayo Mpenda Anasa</h3>
                                <span>Kiambiu University, Kenya</span>
                            </div>
                        </div>
                        <p>
                            Proin interdum enim a ultrices posuere. 
                            Proin dignissim maximus dui, nec efficitur nisi condimentum ac. 
                            Duis vitae nibh pharetra, convallis est vel, sollicitudin purus. Curabitur
                             suscipit neque lorem, ac fringilla mauris auctor sed.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
