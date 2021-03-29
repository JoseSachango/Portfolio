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
    control: {
      padding: theme.spacing(2),
    },
  }));



export default  function Background() {

    const classes = useStyles();


    return(
        <>
            <Grid container xs={12} >
                <Grid item xs={12}>
                    <Paper style={{backgroundColor:"tomato",height:"600px"}} elevation={0}>
                                    Hello world
                    </Paper>
                </Grid>
            </Grid>
        </>
    )



};