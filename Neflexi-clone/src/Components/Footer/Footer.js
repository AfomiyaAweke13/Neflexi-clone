import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>

        {/* Social Icons */}
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* First Row of Links */}
        <div className='footer_links'>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </div>

        {/* Service Code */}
        <div className='service_code'>
          Service Code
        </div>

        {/* Copyright */}
        <div className='copy-write'>
          © 1997-2024 Netflix, Inc.
        </div>

      </div>
    </div>
  )
}

export default Footer;
