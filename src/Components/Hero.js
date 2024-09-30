import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure a Better Education for a Better Community.</h1>
            <p>Sed ac ipsum leo. Sed nec sollicitudin lacus, eu consectetur sapien. Duis pellentesque egestas sapien, eu euismod ipsum pulvinar in. Aliquam lobortis vitae tellus eget vulputate. Aenean et suscipit libero.</p>
            <button className='btn'>Explore More <ArrowRightOutlined style={{ marginLeft: '10px'}} /> </button>
        </div>
    </div>
  )
}
