import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'
import { selectProblem } from 'store/actions/problemSolutions'

const useStyles = makeStyles((theme) => ({
  problemContainer: {
    margin: 'auto',
    width: '80%',
  },
  problemItem: {
    backgroundColor: '#6969ea',
    borderRadius: '5px'
  },
  link: {
    textDecoration: 'none',
    color: 'withe'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    maxHeight: '30px',
    fontSize: '20px',
    overflow: 'hidden',
  }
}))

const SolutionDefinitions = () => {
  const classes = useStyles()
  
  const dispatch = useDispatch()
  const problems = useSelector(store => store.problemSolutions.problems)

  // Reset result select
  useEffect( () => {
    dispatch({
      type: 'selectResult',
      payload: 0
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Grid
      container
      justifyContent='space-between'
      spacing={4}
      className={classes.problemContainer}
    >
      {
        problems.map(problem => {
          return (
            <Grid container item xs={5}
              justifyContent='center'
            >
              <Grid item xs={10}
                className={classes.problemItem}
              >
                <Link
                  to='/viewSolution'
                  onClick={() => {
                    dispatch(selectProblem(problem))
                  }}
                  className={classes.link}
                >
                  <div className={classes.text}>
                    {problem.problem.name}
                  </div>
                </Link>
              </Grid>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default SolutionDefinitions