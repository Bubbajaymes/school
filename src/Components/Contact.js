import React from 'react';
import msg from "../assets/msg-icon.png";
import mail from "../assets/mail-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";
import { ArrowRightOutlined } from '@ant-design/icons';

export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "135e9f43-131c-430b-9869-570f423a4caf");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg} alt='' /></h3>
            <p>Feel free to reach out through contact form or find our
               contact information below. Your deesback, wuestionsm, and suggestiobd are 
               impoetsnd to us as we sstrive fk provude exeptionak servid to kjc universty connubrity.
            </p>
            <ul>
                <li><img src={mail} alt='' /> Contact@KiambiUniversity.org </li>
                <li><img src={phone} alt='' /> +254 716-641-112 </li>
                <li><img src={location} alt='' />7 Kiambiu Ave, Barshosho <br/> KE 00200, Kenya</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name..' required />
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your phone number..' required />
            <label>Write Your Message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
