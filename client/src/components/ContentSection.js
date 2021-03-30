import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WorkExperience from "./WorkExperience"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
   
  }));

const description0 = "Worked collaboratively using GIT version control to create a front-end application called Pet Resume. This application allows its users to query information on dogs that would make a good fit for their lifestyle. I've also worked on a full-stack application that uses socket.io to allow users to send messages in real time."
const description1 = "handled requests for technical limit queries, data management and tracking, offset well research, hole phase analysis, materials and related cost management, cost tracking, contract reviews, invoice processing, non-productive time research, technical presentations, single well process planning, drilling program development, safety initiatives, GO-113 processing, and special projects."
const description2 = "Assisted operations manager in execution of projects, including research, budgeting, and internal communication. Aided in oversea projects related to waste services."
const description3 = "Taught a lecture based on propulsion to 16 students, ranging from ages 10-12. Created and executed weekly lesson plans in order to increase student engagement and interest in S.T.E.M careers. Coordinated events and field trips to expose students to college and more S.T.E.M. activities."
const description4 = "Operated a 20-tray batch distillation column used to separate methanol-water mixtures to create samples and used Chemstation software to test for a linear regression curve compared to student results. Aided undergraduate chemical engineering students during their weekly lab to ensure experiments were performed properly. Operated and performed maintenance of gas chromatograph."



  export default function Content(){
    const classes = useStyles();


    return (
        <Grid container justify="center">
            <Grid item>
                <Paper style={{height:"2000px",width:"1450px", marginTop:"-70px",marginBottom:"50px"}} elevation={5}>

                        <Grid container direction="row"
                        justify="flex-start"
                        alignItems="center"
                        style={{height:"150px"}}
                        >
                            <Grid item>

                                
                            </Grid>
                        </Grid>

                        <Grid container 
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{height:"100px"}}
                        >
                            <Grid item>

                                <Typography variant="h5" >
                                        About me
                                </Typography>
                            </Grid>
                        </Grid>

                        <hr style={{width:"25%"}}/>
                        <br/>

                        <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                            <Grid item>

                                <Typography variant="h6" >
                                       <i>
                                       Life long tinkerer looking to sink my teeth into the next juicy problem.
                                       </i>
                                </Typography>

                                <br/>

                                <p style={{width:"1000px", textAlign:"justify", marginLeft:"20px"}}> Hi! My name is Jose Sachango. I'm a Houston based software developer with experience building full stack applications. I'm also a chemical engineer by training, which gives me the added advantage of being able to apply both numerical and analytical methods to solve a wider range of technical problems in the field of software development.</p>
                                <p style={{width:"1000px", textAlign:"justify", marginLeft:"20px"}}>My background has allowed me to be adaptable and creative. It's also given me a breadth of understanding in a variety of fields. for instance, some of the projects I've worked on include: writing VBA scripts to automate data tracking for drilling and completion operations; designing a polyethylene petrochemical processes using software like ASPEN plus; working in laboratory environments running experiments on gas chromatographs and distillation columns; I've even spent time managing after school STEM programs for fourth and fifth grade boys.</p>
                                <p style={{width:"1000px", textAlign:"justify", marginLeft:"20px"}}>All of these projects had their own unique challenges that required me to draw from of variety of resource and come up with unique solutions; that's what I love to do. If you'd let me, I'd be happy to assess your problem and come up with a solution that works for you.</p>
                                <br/>
                                <hr style={{backgroundColor:"black"}}/>
                                <br/>
                                <br/>
                                <br/>
                                <Typography variant="h7" >
                                <i>Work Experience</i>
                                
                                        
                                </Typography>
                                <br/>
                                <br/>
                                <br/>

                            </Grid>

                            
                            <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            
                            >
                                <Grid item sm={3} border={1}>
                                    <Grid container direction="row" justify="center" alignItems="flex-start" >

                                        <img src="https://img.icons8.com/android/24/000000/calendar.png"/> <b style={{marginLeft:"15px", textAlign:"center"}}>11/2020 - Present</b> 
                                    </Grid>
                                </Grid>

                                <Grid item sm={9} borderLeft={1}>
                    
                                        <Box borderLeft ={1}>

                                                <Grid container justify="flex-start" style={{paddingLeft:"20px"}} >
                                                    <Grid item>
                                                        <Typography variant="h5">
                                                            Web Developer
                                                        </Typography>
                                                        
                                                    </Grid>
                                                </Grid>
                                                <Grid container justify="flex-start" style={{paddingLeft:"20px"}}>
                                                    <Grid item>
                                                        <Typography variant="h6">
                                                            Free Lance:
                                                        </Typography>
                                                        
                                                    </Grid>
                                                </Grid>
                                                <Grid container justify="flex-start" style={{paddingLeft:"20px"}}>

                                                <img src="https://img.icons8.com/fluent-systems-regular/24/000000/map-pin--v2.png"/> <b>Houston, Texas</b>

                                        
                                                </Grid>
                                                <Grid container >
                                                <ul style={{textAlign:"justify",width:"900px"}}>Worked collaboratively using GIT version control to create a front-end application called Pet Resume. This application allows its users to query information on dogs that would make a good fit for their lifestyle. I've also worked on a full-stack application that uses socket.io to allow users to send messages in real time</ul>

                                                </Grid>

                                        </Box>

                                </Grid>
                            </Grid>
                            <Grid container style={{height:"30px"}}>

                            </Grid>
                            <WorkExperience dates="05/2019 - 10/2020" title="Technologist" company="Chevron:" description={description1} />
                            <Grid container style={{height:"30px"}}>

                            </Grid>
                            <WorkExperience dates="10/2018 - 05/2019" title="Operations Associate" company="Ango Global International, Inc:" description={description2} />
                            <Grid container style={{height:"30px"}}>

                            </Grid>
                            <WorkExperience dates="08/2018 - 04/2019" title="Site Coordinator" company="St. Elmo Brady S.T.E.M Academy:" description={description3} />


                        </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
  };