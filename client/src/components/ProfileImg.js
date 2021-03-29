import React from 'react';
import Box from '@material-ui/core/Box';
import ProfileImg from "../assets/img/gitHubPic.png"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '5rem', height: '5rem' },
};

export default function BorderRadius() {
  return (
    <Grid container justify="center" style={{marginTop:"-550px"}}>
            <Grid item>
                
                    <img src={ProfileImg} alt="profile picture" style={{borderRadius:"50%", height:"200px",width:"200px"}}/>
                    
            </Grid>
    </Grid>
      
    
  );
}