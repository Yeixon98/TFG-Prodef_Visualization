import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  binaryIn: {
    padding: '5px',
    backgroundColor: 'green',
    margin: '3px',
    textAlign: 'center'
  },
  binaryOut: {
    padding: '5px',
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

  useEffect(() => {
    console.log("Reload Page");
  }, [attrStyle])

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
          {
            problem.problem.objects.map((values, index) => {
              const isInside = variableValue.value[index]
              const attributes = {}
              values.attributes.forEach(value => {
                attributes[value.attribute] = value.value
              })
              
              const useWidth = attrStyle['width'] === 'default' ? '' : attributes[attrStyle['width']] + "px !important"
              const useHeight = attrStyle['height'] === 'default' ? '' : attributes[attrStyle['height']] + "px !important"
              const useColor = attrStyle['color'] === 'default' ? '' : attributes[attrStyle['color']]
              console.log("useWidth:", useWidth);
              console.log("useHeight:", useHeight);
              console.log("useColor:", useColor);

              return (
                <Grid item
                  className={isInside === 0 ? classes.binaryOut : classes.binaryIn}
                  style={{
                    width: {useWidth},
                    height: {useHeight},
                    color: {useColor},
                  }}
                >
                  {attributes.name}
                </Grid>
              )
            })
          }
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