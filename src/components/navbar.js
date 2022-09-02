import React from 'react'
import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, Grid } from '@material-ui/core'

import { readFile } from '../store/actions/problemSolutions'

import LogoProdef from '../assets/LogoProdef.png'

import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux';
const useStyles = makeStyles(theme => ({
  appBar: {
    marginBottom: '5px'
  },
  toolBar: {
    backgroundColor: '#5858c4 !important',
    padding: '0 15px',
    height: '80px'
  },
  navLinkLogo: {
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center'
  },
  logoSize: {
    height: '60px',
    borderRadius: '5px'
  },
  uploadBottom: {
    backgroundColor: "white",
    color: "black",
    fontWeight: 500,
    padding: 9,
    borderRadius: 5,
    cursor: "pointer",
  }
}))

const NavBar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  return (
    <AppBar
      position='sticky'
      className={classes.appBar}
    >
      
      <Toolbar disableGutters
        className={classes.toolBar}
      >
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <NavLink 
              to='/'
              key='Logo'
              className={classes.navLinkLogo}
            >
              <img
                src={LogoProdef}
                alt='Logo Prodef'
                className={classes.logoSize}
              />
            </NavLink>
          </Grid>

          <Grid item>
            <input type="file" id="FileUpload" hidden onChange={() => {dispatch(readFile())}}/>
            <label for="FileUpload" className={classes.uploadBottom}>Upload Solution</label>
          </Grid>
        </Grid>
      </Toolbar>

    </AppBar>
  )
}

export default NavBar