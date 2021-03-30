import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import backgroundImg from "../assets/img/Stacked Wave.svg"
import Typography from '@material-ui/core/Typography';
import JumboCard from "./JumbtronCard"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));



export default  function Background() {

    const classes = useStyles();


    return(
        <>
            <Grid container xs={12} >
                <Grid item xs={12} style={{backgroundColor:"tomato",height:"650px"}}>
                        <Grid container style={{height:"150px"}}>

                        </Grid>
                        <Grid container xs={12} direction="row" justify="center" alignItems="center">
                            <Grid item xs={12} sm={12}>
                                <Typography variant="p" style={{color:"white",fontSize:"70px"}}>
                                    Software Developer and Engineer
                                </Typography>
                            </Grid>
                           
                        </Grid>
                        {/*
                   
                        <img src={backgroundImg}  alt="background Image" style={{maxHeight:"650px", maxWidth:"2300px"}} />
                         */}
                </Grid>
            </Grid>
        </>
    )



};