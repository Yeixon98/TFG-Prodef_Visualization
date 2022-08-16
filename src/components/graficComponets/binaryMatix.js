import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const BinaryMatrix = (props) => {
  const problem = props.problem
  const selectResult = props.selectResult
  const selectVariable = props.selectVariable
  const variableValue = problem.solution.results[selectResult].variableValues[selectVariable]
  const attrStyle = useSelector(store => store.problemSolutions.attributeStyle)

  // Obtein group col and row
  const lengthRow = variableValue.value.length
  const lengthCol = variableValue.value[0].length
  const allSymbols = problem.problem.classes.map((_class) => {
    return _class.symbol
  })
  const objects = allSymbols.map(symbol => {
    return problem.problem.objects.filter(object => object.class === symbol)
  })

  const objectsRow = objects[0].length === lengthRow ? objects[0] : objects[1]
  const objectsCol = objects[1].length === lengthCol ? objects[1] : objects[0]


  return (
    <Grid container direction='column' alignItems="center">
      
      <Grid item >Name Variable: {variableValue.name}</Grid>
      <Grid item >Symbol Variable: {variableValue.symbol}</Grid>

      <Divider
        style={{
          marginTop: 20,
          marginBottom: 20
        }}
      />

      <Grid item container justifyContent="center" xs={12}>
        {variableValue.value.map((contentRow, row) => {
          return (
            <Grid item container xs={2}
              style={{
                border: '2px solid blue',
                margin: '0 5px'
              }}
            >
              <Grid item xs={12}
                style={{
                  textAlign: 'center',
                  borderBottom: '2px solid blue',
                  padding: '2px'
                }}
              >
                <Typography
                  variant="h6"
                >
                  {objectsRow[row].attributes[0].value}
                </Typography>
              </Grid>
              <Grid item container xs={12} justifyContent="space-around"
                style={{
                  padding: '2px',
                }}
              >
                {contentRow.map((contentCol, col) => {
                  if(contentCol === 1) {
                    const attributes = {}
                    objectsCol[col].attributes.forEach(value => {
                      attributes[value.attribute] = value.value
                    })
                    console.log(attributes);
                    let useWidth = attrStyle['width'] === 'default' ? '' : attributes[attrStyle['width']] * 1.5 + 60
                    let useHeight = attrStyle['height'] === 'default' ? '' : attributes[attrStyle['height']] * 1.5 + 31
                    return (
                      <Grid item
                        style={{
                          width: useWidth,
                          height: useHeight
                        }}
                      >
                        <Typography
                        >
                          {objectsCol[col].attributes[0].value}
                        </Typography>
                      </Grid>
                    )
                  } else {
                    return (
                      <></>
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