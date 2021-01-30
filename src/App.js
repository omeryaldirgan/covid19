import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Logo from './assets/img/covid-19.svg'
import './App.css';

const App=()=>{
  return (
     <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
        <Grid container>
           <img  src={Logo} alt='logo'/>
        </Grid>
        </Container>
     </React.Fragment>
  );
}

export default App;
