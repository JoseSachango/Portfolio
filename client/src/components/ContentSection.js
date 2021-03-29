import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
   
  }));




  export default function Content(){
    const classes = useStyles();


    return (
        <Grid container justify="center">
            <Grid item>
                <Paper style={{height:"400px",width:"1450px", marginTop:"-70px",marginBottom:"50px"}} elevation={5}>
                        Hellow world
                </Paper>
            </Grid>
        </Grid>
    )
  };