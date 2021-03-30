
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



export default function WorkExperience(props){



    return(
                         
        <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        
        >
            <Grid item sm={3} border={1}>
                <Grid container direction="row" justify="center" alignItems="flex-start" >

                    <img src="https://img.icons8.com/android/24/000000/calendar.png"/> <b style={{marginLeft:"15px", textAlign:"center"}}>{props.dates}</b> 
                </Grid>
            </Grid>

            <Grid item sm={9} borderLeft={1}>

                    <Box borderLeft ={1}>

                            <Grid container justify="flex-start" style={{paddingLeft:"20px"}} >
                                <Grid item>
                                    <Typography variant="h5">
                                        {props.title}
                                    </Typography>
                                    
                                </Grid>
                            </Grid>
                            <Grid container justify="flex-start" style={{paddingLeft:"20px"}}>
                                <Grid item>
                                    <Typography variant="h6">
                                        {props.company}
                                    </Typography>
                                    
                                </Grid>
                            </Grid>
                            <Grid container justify="flex-start" style={{paddingLeft:"20px"}}>

                            <img src="https://img.icons8.com/fluent-systems-regular/24/000000/map-pin--v2.png"/> <b>Houston, Texas</b>

                    
                            </Grid>
                            <Grid container >
                            <ul style={{textAlign:"justify",width:"900px"}}>{props.description}</ul>

                            </Grid>

                    </Box>

            </Grid>
        </Grid>
    )
};