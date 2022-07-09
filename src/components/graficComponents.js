import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  binaryIn: {
    padding: '5px',
    backgroundColor: '#9f90ff',
    margin: '3px',
    textAlign: 'center',
    width: 60,
    height: 31
  },
  binaryOut: {
    padding: '5px',
    backgroundColor: '#9f90ff',
    margin: '3px',
    textAlign: 'center',
    width: 60,
    height: 31
  }
}))

const GraficComponent = (props) => {
  const classes = useStyles()

  const problem = props.problem
  const selectResult = props.selectResult
  const selectVariable = props.selectVariable
  const variableValue = problem.solution.results[selectResult].variableValues[selectVariable]
  const attrStyle = useSelector(store => store.problemSolutions.attributeStyle)

  console.log("Attributos - Estilo:", attrStyle);

  const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  if(variableValue.shape.type === "vector" &&
     variableValue.range.lowerBound === 0 && 
     variableValue.range.upperBound === 1) {
    // Vector Binario
    return(
      <Grid container direction='column' alignItems='center'>
        <Grid item >Nombre de la Variable: {variableValue.name}</Grid>
        <Grid item >Simbolo de la Variable: {variableValue.symbol}</Grid>
        
        <Grid item container justifyContent='space-between' direction='row' >
          <Grid item container xs={5} justifyContent='center'
            style={{
              padding: 2,
              border: '3px solid green',
              paddingBottom: 10
            }}
          >
            <Grid item xs={12}
            >
              <Typography
                component="div"
                variant='h5'
              >
                Within
              </Typography>
            </Grid>
            {
              problem.problem.objects.map((values, index) => {
                const isInside = variableValue.value[index]
                const attributes = {}
                values.attributes.forEach(value => {
                  attributes[value.attribute] = value.value
                })
                
                let useWidth = attrStyle['width'] === 'default' ? '' : attributes[attrStyle['width']] * 1.5 + 60
                let useHeight = attrStyle['height'] === 'default' ? '' : attributes[attrStyle['height']] * 1.5 + 31
                let useColor = attrStyle['color'] === 'default' ? 0 : 255 - attributes[attrStyle['color']] * 3

                if(isInside === 1) {
                  return (
                    <Grid item
                      className={classes.binaryIn}
                      style={{
                        width: useWidth,
                        height: useHeight,
                        backgroundColor: useColor === 0 ? '' : rgbToHex(useColor, useColor, useColor),
                        color: useColor === 0 ? '#414191' : useColor <= 128 ? 'white' : 'black'
                      }}
                    >
                      {attributes.name}
                    </Grid>
                  )
                } else {return (<div></div>)}
              })
            }
          </Grid>


          <Grid item container xs={5} justifyContent='center'
            style={{
              padding: 2,
              border: '3px solid red',
              paddingBottom: 10
            }}
          >
            <Grid item xs={12}>
              <Typography
                component="div"
                variant='h5'
              >
                Outside
              </Typography>
            </Grid>
            {
              problem.problem.objects.map((values, index) => {
                const isInside = variableValue.value[index]
                const attributes = {}
                values.attributes.forEach(value => {
                  attributes[value.attribute] = value.value
                })
                
                let useWidth = attrStyle['width'] === 'default' ? '' : attributes[attrStyle['width']] * 1.5 + 60
                let useHeight = attrStyle['height'] === 'default' ? '' : attributes[attrStyle['height']] * 1.5 + 31
                let useColor = attrStyle['color'] === 'default' ? 0 : 255 - attributes[attrStyle['color']] * 3

                if (isInside === 0) {
                  return (
                    <Grid item
                      className={classes.binaryOut}
                      style={{
                        width: useWidth,
                        height: useHeight,
                        backgroundColor: useColor === 0 ? '' : rgbToHex(useColor, useColor, useColor),
                        color: useColor === 0 ? '#414191' : useColor <= 128 ? 'white' : 'black'
                      }}
                    >
                      {attributes.name}
                    </Grid>
                  )
                } else {return (<div></div>)}
              })
            }
          </Grid>
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