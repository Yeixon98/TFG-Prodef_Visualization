import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import SelectStyle from "components/selectStyle";

const IntegerMatrix = (props) => {

  const problem = props.problem
  const selectResult = props.selectResult
  const selectVariable = props.selectVariable
  const variableValue = problem.solution.results[selectResult].variableValues[selectVariable]
  const attrStyle = useSelector(store => store.problemSolutions.attributeStyle)

  const allAttributes = []

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
            <tr>Variable Symbol: </tr>
          </td>
          <td>
            <tr>{variableValue.name}</tr>
            <tr>{variableValue.symbol.toUpperCase()}</tr>
          </td>
        </table>
      </Grid>

      <Grid item xs={12} container justifyContent="center" >
        CONTENT
      </Grid>

    </Grid>
  )
}

export default IntegerMatrix