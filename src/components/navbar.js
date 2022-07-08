import React from 'react'
import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar } from '@material-ui/core'

import LogoProdef from '../assets/LogoProdef.png'

import { makeStyles } from '@material-ui/core/styles'
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
}))

const NavBar = () => {
  const classes = useStyles()
  
  return (
    <AppBar
      position='sticky'
      className={classes.appBar}
    >
      
      <Toolbar disableGutters
        className={classes.toolBar}
      >
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

        {/* Add other routes */}

      </Toolbar>

    </AppBar>
  )
}

export default NavBar