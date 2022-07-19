import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  containerBinaryIn: {
    padding: 5,
    border: '3px solid green',
    borderRadius: 3,
    marginLeft: 10,
    backgroundColor: '#bbffc4'
  },
  containerBinaryOut: {
    padding: 5,
    border: '3px solid red',
    borderRadius: 3,
    marginRight: 10,
    backgroundColor: '#ffbbbb'
  },
  binaryItem: {
    padding: '5px',
    backgroundColor: '#9f90ff',
    margin: '3px',
    textAlign: 'center',
    width: 60,
    height: 31,
    borderRadius: 3
  },
  containerBinaryAll: {
    padding: 5,
    border: '3px solid #6741ff',
    borderRadius: 3,
    backgroundColor: '#9595ff'
  },
  binaryIn: {
    padding: '5px',
    backgroundColor: '#bbffc4',
    margin: '3px',
    textAlign: 'center',
    width: 60,
    height: 31,
    borderRadius: 3
  },
  binaryOut: {
    padding: '5px',
    backgroundColor: '#b5b5b5',
    margin: '3px',
    textAlign: 'center',
    width: 60,
    height: 31,
    borderRadius: 3
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
          <Grid item container xs={5} justifyContent='center' alignContent='center'
            className={classes.containerBinaryIn}
          >
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
                    <Grid item container alignContent='center' justifyContent='center'
                      className={classes.binaryItem}
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


          <Grid item container xs={5} justifyContent='center' alignContent='center'
            className={classes.containerBinaryOut}
          >
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
                    <Grid item container alignContent='center' justifyContent='center'
                      className={classes.binaryItem}
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

        <Divider
          style={{
            marginTop: 20,
            marginBottom: 20
          }}
        />

        <Grid item container justifyContent='center' direction='row' xs={12}>
          <Grid item container xs={10} justifyContent='center' alignContent='center'
            className={classes.containerBinaryAll}
          >
            {
              problem.problem.objects.map((values, index) => {
                const isInside = variableValue.value[index]
                const attributes = {}
                values.attributes.forEach(value => {
                  attributes[value.attribute] = value.value
                })
                
                let useWidth = attrStyle['width'] === 'default' ? '' : attributes[attrStyle['width']] * 1.5 + 60
                let useHeight = attrStyle['height'] === 'default' ? '' : attributes[attrStyle['height']] * 1.5 + 31
                // let useColor = attrStyle['color'] === 'default' ? 0 : 255 - attributes[attrStyle['color']] * 3

                  return (
                    <Grid item container alignContent='center' justifyContent='center'
                      className={isInside === 1 ? classes.binaryIn : classes.binaryOut}
                      style={{
                        width: useWidth,
                        height: useHeight,
                        // backgroundColor: useColor === 0 ? '' : rgbToHex(useColor, useColor, useColor),
                        // color: useColor === 0 ? '#414191' : useColor <= 128 ? 'white' : 'black'
                      }}
                    >
                      {attributes.name}
                    </Grid>
                  )
              })
            }
          </Grid>
        </Grid>

      </Grid>
    )
  }
  else if(variableValue.shape.type === "vector" && 
          variableValue.shape.isPermutation &&
          variableValue.range.lowerBound === '-Infinity' && 
          variableValue.range.upperBound === 'Infinity') {
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