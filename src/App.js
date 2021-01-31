import React,{useEffect,useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Logo from './assets/img/covid-19.svg'
import {fetchCountries} from "./assets/api";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AreaChart from "./components/Chart"
import './App.css';

const App=()=>{
   const [countries,setCountries]=useState([]);
   const [country,setCountry]=useState("turkey");

   useEffect(()=>{
    const fetchCountriesData=async ()=>{
       const data=await fetchCountries();
       setCountries(data)
    }
      fetchCountriesData();
   },[])

   const useStyles = makeStyles((theme) => ({
      formControl: {
         margin: theme.spacing(1),
         minWidth: 220,
         float:'right',
      },
      selectEmpty: {
         marginTop: theme.spacing(2),
      },
   }));

   const handleChange = (event) => {
      setCountry(event.target.value);
   };

   const classes = useStyles();
  return (
     <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" style={{marginTop:10}}>
        <Grid container>
           <Grid item xs={3 }>
              <img  src={Logo} alt='logo' style={{height:70}}/>
           </Grid>
           <Grid item xs={9}>
              <FormControl className={classes.formControl}>
                 <Select
                    value={country}
                    onChange={handleChange}
                 >
                    {
                       countries.map((item,inx)=>{
                          return(
                             <MenuItem key={inx} value={item.Slug}>{item.Country}</MenuItem>
                          )
                       })
                    }
                 </Select>
              </FormControl>
           </Grid>
        </Grid>
        <Grid item xs={12 } style={{marginTop:30}}>
           <AreaChart country={country}/>
        </Grid>
        </Container>
     </React.Fragment>
  );
}

export default App;
