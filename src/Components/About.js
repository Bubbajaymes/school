import React from 'react';
import about_img from "../assets/about-img.jpg";
import play_icon from "../assets/play-icon.png";

export default function About({setPlayState}) {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img' />
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tommorow's Leaders Today</h2>
            <p>
                Proin interdum enim a ultrices posuere. Proin dignissim maximus dui, nec efficitur nisi condimentum ac. Duis vitae nibh pharetra, convallis est vel, sollicitudin purus. 
                Curabitur suscipit neque lorem, ac fringilla mauris auctor sed. Praesent ultricies facilisis risus vitae suscipit. Cras in consequat ante, eget vulputate lorem. 
                Sed nec arcu dui. Nulla auctor sollicitudin nisl, nec placerat velit semper nec. 
                Integer sed est sit amet mi condimentum maximus. Nam nec purus leo.
            </p>
            <p>
                Sed ac ipsum leo. Sed nec sollicitudin lacus, eu consectetur sapien. 
                Duis pellentesque egestas sapien, eu euismod ipsum pulvinar in. Aliquam lobortis vitae tellus eget vulputate. Aenean et suscipit libero. Maecenas sagittis sapien eu luctus tempor. 
                Suspendisse urna justo, vulputate a mollis eu, mattis non erat. Donec eget hendrerit erat. Sed et ultrices est. Morbi pretium sed tellus vel viverra. Praesent non leo at diam eleifend imperdiet.
            </p>
        </div>
    </div>
  )
}
