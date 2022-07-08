import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  binaryIn: {
    width: '20px',
    height: '20px',
    backgroundColor: 'green',
    margin: '3px',
    textAlign: 'center'
  },
  binaryOut: {
    width: '20px',
    height: '20px',
    backgroundColor: 'red',
    margin: '3px',
    textAlign: 'center'
  }
}))

const GraficComponent = (props) => {
  const classes = useStyles()

  const problem = props.problem
  const selectResult = props.selectResult
  const selectVariable = props.selectVariable
  const variableValue = problem.solution.results[selectResult].variableValues[selectVariable]
  const attrStyle = useSelector(store => store.problemSolutions.attributeStyle)
  // console.log("Result Index: " + selectResult);
  // console.log("Variable Index: " + selectVariable);
  // console.log("Variable Valor: ", variableValue);

  if(variableValue.shape.type === "vector" &&
     variableValue.range.lowerBound === 0 && 
     variableValue.range.upperBound === 1) {
    // Vector Binario
    console.log("Atributo - Estilo: ", attrStyle);
    return(
      <Grid container direction='column' alignItems='center'>
        <Grid item >Nombre de la Variable: {variableValue.name}</Grid>
        <Grid item >Simbolo de la Variable: {variableValue.symbol}</Grid>
        
        <Grid item container justifyContent='center'>
          {variableValue.value.map((value, index) => {
            return (
              <Grid item
                className={value === 0 ? classes.binaryOut : classes.binaryIn}
              >
                {index + 1}
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    )
  }
  else if(variableValue.shape.type === "vector" &&
          variableValue.range.lowerBound === 0 && 
          variableValue.range.upperBound > 1) {
    // Vector de enteros
    return(
      <div>
        Vector de enteros
      </div>
    )
  }
  else {
    // Matriz
    return(
      <div>
        Matriz
      </div>
    )
  }
}

export default GraficComponent