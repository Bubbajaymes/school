import React from 'react';
import program_1 from "../assets/programmm1.jpg";
import program_2 from "../assets/programm2.webp";
import program_3 from "../assets/programmm3.avif";
import program_icon_1 from "../assets/program-icon-1.png";
import program_icon_2 from "../assets/program-icon-2.png";
import program_icon_3 from "../assets/program-icon-3.png";

export default function Programs() {
  return (
    <div className='programs'>
        <div className='program-sec'>
            <img src={program_1} alt='' />
            <div className='caption'>
                <img src={program_icon_1} alt='' />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program-sec'>
            <img src={program_2} alt='' />
            <div className='caption'>
                <img src={program_icon_2} alt='' />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className='program-sec'>
            <img src={program_3} alt='' />
            <div className='caption'>
                <img src={program_icon_3} alt='' />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}
