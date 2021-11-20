import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import { Link } from 'react-router-dom';


export default function Nav() {

  return (
    <React.Fragment>
      <AppBar style={{margin:'0%0%0%34%'}}>
        <Toolbar>
         
          
          <Link to='/' style={{textDecoration:'none'}}><Typography style={{color:'white'}}>
         HOME
          </Typography></Link>
          <Link to='/admin' style={{textDecoration:'none'}}><IconButton style={{margin:'0%0%0%2%',color:"white" }}>
            ADMIN
          </IconButton></Link>
          
        
         
        </Toolbar>
      </AppBar>
      <Toolbar />
      
    </React.Fragment>
  );
}
