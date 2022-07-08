import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import GraficComponent from 'components/graficComponents'
import { Divider, Grid, NativeSelect } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  nameProblem: {
    fontSize: '30px',
    fontWeight: 'bolder',
    margin: '10px 0',
  },
  goalsTitle: {
    fontSize: '25px',
    fontWeight: 'bolder',
    margin: '10px 0'
  },
  goalsSubtitle: {
    fontSize: '23px',
    fontWeight: '600',
    marginLeft: '20px'
  },
  goalsText: {
    fontSize: '20px',
    marginLeft: '30px'
  },
  basicInfo: {
    fontSize: '20px',
    marginLeft: '20px'
  }
}))

const ViewSolution = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  
  const problem = useSelector(store => store.problemSolutions.selectProblem)
  const totalResult = problem.solution ? problem.solution.results.length : 0
  const selectResult = useSelector(store => store.problemSolutions.selectResult)
  const lastUpdate = new Date(problem.lastUpdate ? problem.lastUpdate : 0)

  const handleSelectResult = (event) => {
    dispatch({
      type: "selectResult",
      payload: event.target.value,
    })
  }


  if(problem.problem && problem.state && problem.solution) {
    return (
      <div>
        <Grid container justifyContent='center' spacing={4}>
          <Grid container item xs={8} justifyContent='space-between'>
            <Grid item xs={7}
              className={classes.nameProblem}
            >
              {problem.problem.name}
            </Grid>
            <Grid item
              className={classes.nameProblem} 
            >
              <NativeSelect
                disableUnderline
                onChange={handleSelectResult}
                inputProps={{
                  name: 'result',
                  id: 'result-native-helper',
                }}
                variant='filled'
                value={selectResult}
                className={classes.nativeSelectResult}
              >
                {problem.solution.results.map((_, index) => {
                  return (
                    <option
                      value={index}
                    >
                      Result {index + 1}
                    </option>
                  );
                })}
              </NativeSelect>
            </Grid>
            <Grid container item direction='column'>
              <Grid container item>
                <Grid item xs={4}
                  className={classes.basicInfo}
                >
                  Computing time of execution:
                </Grid>
                <Grid item
                  className={classes.basicInfo}
                >
                  {problem.solution.computingTime} ms
                </Grid>
              </Grid>

              <Grid container item>
                <Grid item xs={4}
                  className={classes.basicInfo}
                >
                  Status of execution:
                </Grid>
                <Grid item
                  className={classes.basicInfo}
                >
                  {problem.state === 'resolved' ? "Solved" : "Pending"}
                </Grid>
              </Grid>

              <Grid container item>
                <Grid item xs={4}
                  className={classes.basicInfo}
                >
                  Result select:
                </Grid>
                <Grid item
                  className={classes.basicInfo}
                >
                  {parseInt(selectResult) + 1}/{totalResult}
                </Grid>
              </Grid>

              <Grid container item>
                <Grid item xs={4}
                  className={classes.basicInfo}
                >
                  Result is feasible:
                </Grid>
                <Grid item
                  className={classes.basicInfo}
                >
                  {problem.solution.results[selectResult].isFeasible ? "Yes" : "No"}
                </Grid>
              </Grid>
              
              <Grid container item>
                <Grid item xs={4}
                  className={classes.basicInfo}
                >
                  Last update:
                </Grid>
                <Grid item
                  className={classes.basicInfo}
                >
                  {lastUpdate.getDate()}/{lastUpdate.getMonth()+1}/{lastUpdate.getFullYear()}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={8}>
            <Grid item xs={7}
              className={classes.goalsTitle}
            >
              Goals
            </Grid>
            <Grid container item direction='column' xs={12}>
              <Grid container item>
                <Grid item xs={4} className={classes.goalsSubtitle}>Goal name</Grid>
                <Grid item className={classes.goalsSubtitle}>Value</Grid>
              </Grid>
              {
                problem.solution.results[selectResult].goalValues.map(goal => {
                  return (
                    <Grid container item>
                      <Grid item xs={4} className={classes.goalsText}>{goal.sense} value</Grid>
                      <Grid item className={classes.goalsText}>{goal.value}</Grid>
                    </Grid>
                  )
                })
              }
            </Grid>
          </Grid>
        </Grid>

        <Divider
          style={{
            marginTop: 20,
            marginBottom: 20
          }}
        />

        <Grid 
          container
          spacing={2}
        >
          {
            problem.solution.results[selectResult].variableValues.map((_, index) => {
              return (
                <Grid item xs={problem.solution.results[selectResult].variableValues.length > 1 ? 6 : 12}>
                  <GraficComponent
                    problem={problem}
                    selectResult={selectResult}
                    selectVariable={index}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    )
  }
  else {
    return (
      <Grid container justifyContent='center'>
        <Grid item>
          <h1>Undefined Problem</h1>
        </Grid>
      </Grid>
    )
  }
}

export default ViewSolution