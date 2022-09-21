import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import SelectStyle from "components/selectStyle";

import { perc2color } from "../../store/actions/problemSolutions"

const BinaryMatrix = (props) => {
  const problem = props.problem
  const selectResult = props.selectResult
  const selectVariable = props.selectVariable
  const variableValue = problem.solution.results[selectResult].variableValues[selectVariable]
  const attrStyle = useSelector(store => store.problemSolutions.attributeStyle)

  // Obtein group col and row
  const lengthRow = variableValue.value.length
  const lengthCol = variableValue.value[0].length
  const allClass = problem.problem.classes.map((_class) => {
    return _class.symbol
  })
  const objects = allClass.map(symbol => {
    return problem.problem.objects.filter(object => object.class === symbol)
  })
  const objectsRow = objects[1].length === lengthRow ? objects[1] : objects[0]
  const objectsCol = objects[0].length === lengthCol ? objects[1] : objects[0]
  
  const allAttributes = objectsCol[0].attributes.map(value => value.attribute).filter(attribute => attribute !== "name")

  return (
    <Grid container justifyContent="center" style={{marginTop: 20}}>
      <Grid item xs={12}>
        <SelectStyle
          attributes = {allAttributes}
          styles = {["width", "height", "color"]}
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
          </td>
          <td>
            <tr>{variableValue.name}</tr>
          </td>
        </table>
      </Grid>
     
      <Grid item xs={12} container justifyContent="center" >
        {variableValue.value.map((resultRow, row) => {
          return (
            <Grid item container xs={3} direction='column'style={{borderRadius: 5,border: '2px solid blue',margin: '0 5px', backgroundColor: '#acacfc', marginBottom: 15}}>

              <Grid item container justifyContent="center" alignItems="center"
                style={{
                  borderBottom: '2px solid blue',
                  padding: '2px'
                }}
              >
                <Typography variant="h6">
                  {objectsRow[row].attributes[0].value}
                </Typography>
              </Grid>

              <Grid item container justifyContent="center" style={{padding: '2px'}}>
                {
                // eslint-disable-next-line
                resultRow.map((resultCol, col) => {
                  if(resultCol === 1) {
                    const attributes = {}
                    objectsCol[col].attributes.forEach(value => {
                      attributes[value.attribute] = value.value
                    })

                    let useWidth = attrStyle['width'] === 'default' ? 'auto' : attributes[attrStyle['width']] + 90
                    let useHeight = attrStyle['height'] === 'default' ? 'auto' : attributes[attrStyle['height']] + 30 
                    let useColor = attrStyle['color'] === 'default' ? 0 : attributes[attrStyle['color']]

                    return (
                      <Grid item container justifyContent="center" alignItems="center"
                        style={{
                          width: useWidth,
                          height: useHeight,
                          padding: '5px',
                          backgroundColor: useColor === 0 ? '#bbffc4' : perc2color(useColor),
                          color: useColor === 0 ? '#000000' : useColor <= 128 ? 'white' : 'black',
                          margin: '3px',
                          borderRadius: 3,
                          minHeight: '30px',
                          minWidth: '90px',
                          textOverflow: 'ellipsis'
                          // color: useColor === 0 ? '#414191' : useColor <= 128 ? 'white' : 'black'
                        }}
                      >
                        <Typography>
                          {objectsCol[col].attributes[0].value}
                        </Typography>
                      </Grid>
                    )
                  }
                })}
              </Grid>

            </Grid>
          )
        })}


      </Grid>
    </Grid>
  )

}

export default BinaryMatrix