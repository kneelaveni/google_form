import React from 'react'
import "./Drawer.css";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import googledoc from "./images/googledoc.png";
import googlesheet from "./images/googleexel.jpeg";
import googledrive from "./images/googledrivve.png";
import googleslides from "./images/googleslides.png";
import gooleform from "./images/5968528.png"

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

// const useStyles = makeStyles({
//     listItem:{
//         marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"
//     }
// })

function TempararyDrawer() {
    // const classes = useStyles()

    const [state, setState] = React.useState({
        left: false,
      
      });
      const toggleDrawer =(anchor, open) =>(event) => {
      setState({ ...state, [anchor]: open });
    };


  return (
    <div>
        <React.Fragment>
        <IconButton onClick={toggleDrawer('left',true)}>
            <MenuIcon/>
        </IconButton>
        <Drawer open={state['left']} onClose={toggleDrawer('left',false)} anchor='left'>
           <div style={{width:'250px'}} role='presentation'>
           <Divider/>
           <List >
                <ListItem>
                    <ListItemText style={{fontSize:'48px',marginLeft:'5px',cursor:"pointer"}}>
                    <span style={{color:'blue',fontWeight:'700',fontSize:'22px',fontFamily:"'Product Sans'Arial,sans-serif"}}>G</span>
                        <span style={{color:'red',fontWeight:'500',fontSize:'22px',fontFamily:"'Product Sans'Arial,sans-serif"}}>o</span>
                        <span style={{color:'yellow',fontWeight:'500',fontSize:'22px',fontFamily:"'Product Sans'Arial,sans-serif"}}>o</span>
                        <span style={{color:'blue',fontWeight:'500',fontSize:'22px',fontFamily:"'Product Sans'Arial,sans-serif"}}>g</span>
                        <span style={{color:'green',fontWeight:'500',fontSize:'22px',fontFamily:"'Product Sans'Arial,sans-serif"}}>l</span>
                        <span style={{color:'red',fontWeight:'500',fontSize:'22px',marginRight:"10px", fontFamily:"'Product Sans'Arial,sans-serif"}}>e</span>
                        <span style={{color:'#5f6368',fontWeight:'700',fontSize:'22px',fontFamily:"'Product Sans'Arial,sans-serif"}}>Forms</span>

                    </ListItemText>
                </ListItem>
            </List>
            <Divider/>
            <List style={{marginLeft:"8px",marginRight:"8px",marginTop:"15px",cursor:"pointer"}}>
                <ListItem className='list_item'>
                    <img src={googledoc} style={{height:"20px",width:"20px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"gray"}}>Docs</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={googlesheet} style={{height:"20px",width:"20px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"gray"}}>Sheets</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={googleslides} style={{height:"20px",width:"20px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"gray"}}>Slides</div>
                </ListItem>
                <ListItem className='list_item'>
                    <img src={gooleform} style={{height:"20px",width:"20px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"gray"}}>Forms</div>
                </ListItem>

            </List>
            <Divider/>
            <List style={{cursor:"pointer"}}>
                <ListItem className='list_item'>
                    <SettingsOutlinedIcon style={{color:"gray"}}/>
                    <div style={{marginLeft:"10px",color:"gray"}}>Settings</div>
                </ListItem>
                <ListItem className='list_item'>
                    <HelpOutlineOutlinedIcon style={{color:"gray"}}/>
                    <div style={{marginLeft:"10px",color:"gray"}}>Help & Feedback</div>
                </ListItem>
            </List>
            <Divider/>
            <List style={{cursor:"pointer"}}>
                <ListItem className='list_item'>
                    <img src={googledrive} style={{height:"20px",width:"20px"}}/>
                    <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Drive</div>
                </ListItem>
            </List>
            <Divider/>
           </div>

        </Drawer>
        

        </React.Fragment>
    </div>
  )
}

export default TempararyDrawer;