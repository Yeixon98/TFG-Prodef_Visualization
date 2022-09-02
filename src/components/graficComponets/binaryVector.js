import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import SelectStyle from "components/selectStyle";


const useStyles = makeStyles((theme) => ({
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
    width: 70,
    height: 31,
    borderRadius: 3
  },
  binaryOut: {
    padding: '5px',
    backgroundColor: '#b5b5b5',
    margin: '3px',
    textAlign: 'center',
    width: 70,
    height: 31,
    borderRadius: 3
  }
}))

const BinaryVector = (props) => {
  const classes = useStyles()

  const problem = props.problem
  const selectResult = props.selectResult
  const selectVariable = props.selectVariable
  const variableValue = problem.solution.results[selectResult].variableValues[selectVariable]
  const attrStyle = useSelector(store => store.problemSolutions.attributeStyle)
  const allAttributes = problem.problem.objects[0].attributes.map(attr => attr.attribute).filter(attr => attr !== "name")

  return(
    <Grid container justifyContent="center" style={{marginTop: 20}}>
      <Grid item xs={12}>
        <SelectStyle
          attributes = {allAttributes}
          styles = {["width","height"]}
        />
      </Grid>
      
      <Grid item
        style={{
          margin: '10px 0'
        }}
      >
        <table>
          <td>
            <tr>Variable Name: </tr>
            <tr>Variable Symbol: </tr>
          </td>
          <td>
            <tr>{variableValue.name}</tr>
            <tr>{variableValue.symbol.toUpperCase()}</tr>
          </td>
        </table>
      </Grid>

      <Grid item container justifyContent='center' xs={12}>
        <Grid item container xs={11} justifyContent='center' alignContent='center'
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

              return (
                <Grid item container alignItems='center' justifyContent='center'
                  className={isInside === 1 ? classes.binaryIn : classes.binaryOut}
                  style={{
                    width: useWidth,
                    height: useHeight,
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

export default BinaryVector;