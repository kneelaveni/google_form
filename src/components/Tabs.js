import React from 'react'
// import { makeStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// const useStyles =makeStyles({
//     root:{
//         flexGrow:1,
//     },
    // tab:{
    //     fontSize:12,
    //     color:"#5f6368",
    //     textTransform:'capitalize',
    //     height:10,
    //     fontWeight:"600",
    //     fontFamily:"Goole Sans,ROboto,Arial,sans-sarif",
    // },
    // tabs:{
    //     height:10
    // }
// })


function Centeredtab() {
    // const classes = useStyles()
  return (
    <Paper className='root'>
        <Tabs
        className='tabs'
        textColor='primary'
        indicatorColor='primary'
        centered
        >
            <Tab label='Questions' className='tab'>

            </Tab>
            <Tab label='Response' className='tab'>

            </Tab>
        </Tabs>
    </Paper>
  )
}

export default Centeredtab;
