import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'

import Typography from '@mui/material/Typography';

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({

}))

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <NavLink to='/'>
        <Typography
          variant='h4'
          component='h4'
        >
          Start
        </Typography>
      </NavLink>
    </div>
  )
}

export default NotFound