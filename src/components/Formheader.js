import React from 'react'
import form_image from "./images/5968528.png";
import {FiStar, FiSettings} from "react-icons/fi";
import {AiOutlineEye} from "react-icons/ai"
import { IconButton } from '@mui/material';
import avatarimage from "./images/mypic.jpeg";
import {IoMdFolderOpen} from "react-icons/io";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import "./Formheader.css";

function Formheader() {
  return (
    <div className='form_header'>
        
        <div className='form_header_left'>
            <img src={form_image} alt="" style={{height:'45px',width:'40px'}}/>
            <input type='text' placeholder='Untitled form' className='form_name' ></input>
            <IoMdFolderOpen className='form_header_icon' style={{marginRight:'10px'}}></IoMdFolderOpen>
            <FiStar className='form_header_icon' style={{marginRight:'10px'}}/>
            <span style={{fontSize:'12px',fontWeight:'600'}}>All chanes saved in Drive</span>
        </div>
        <div className='form_header_right'>
          <IconButton>
            <ColorLensIcon size='small' className='form_header_icon'/>
          </IconButton>
          <IconButton>
            <AiOutlineEye className='form_header_icon'/>
          </IconButton>
          <IconButton>
            <FiSettings className='form_header_icon'/>
          </IconButton>
          <Button variant='contained' color='primary' href='#contained-buttons'>Send</Button>
          <IconButton>
            <MoreVertIcon className='form_header_icon'/>
          </IconButton>
          <IconButton>
            <Avatar style={{height:'30px',width:'30px'}} src={avatarimage}/>
          </IconButton>
        </div>
    </div>
  )
}

export default Formheader;