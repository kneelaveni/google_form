import React from 'react'
import "./Header.css"
import IconButton from '@mui/material/IconButton';
import formimage from "./images/5968528.png";
import profile from "./images/mypic.jpeg"
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import TempararyDrawer from "./TempararyDrawer";
function Header() {
  return (
    <div className='header'>
        <div className='header-info'>
            <TempararyDrawer/>
            <img src={formimage} style={{height:'40px',width:'40px'}} alt='no image' />
            <div className='info'>
                Forms
            </div>

        </div>
        <div className='header-search'>
            <IconButton><SearchIcon/></IconButton>
            <input type='text' name='search' placeholder='search'/>
            
        </div>
        <div className='header-right'>
            <IconButton><AppsIcon/></IconButton>
            <IconButton>
            <Avatar alt="Neelaveni Koduru" src={profile} />
            </IconButton>
        </div>
        
    </div>
  )
}

export default Header