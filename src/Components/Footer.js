import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <p>Kiambiu University ©{new Date().getFullYear()} Created by Bubba Jaymes.</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}
