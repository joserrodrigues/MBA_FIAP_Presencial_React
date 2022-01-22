import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import './Home.css'

export default function HomeView({ info, person }) {

    let name = "";
    if (person){
        name = person.persons[0].firstName + " " + person.persons[0].lastName
    }
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Typography gutterBottom variant="h3" className="text">
                Person {name}
            </Typography>                
            <Typography gutterBottom variant="h3" className="text">
                Info {info}
            </Typography>
        </Grid>
    );
}