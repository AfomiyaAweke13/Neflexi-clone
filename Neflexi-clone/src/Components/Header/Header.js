import React from 'react'
import "./Header.css"
import Netflixlogo from "../../assets/images/netfixlogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
function Header() {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
           <li><img src={Netflixlogo} alt="Netflixlogo" width="100%" height="80"/>
           </li>
            <li>Netfliex</li>
            <li>Home</li>
            <li>TvShow</li>
            <li>Movies</li>
            <li>Leatest</li>
            <li>My List</li>
            <li>Browse By Language</li>
          </ul>

        </div>
        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Header