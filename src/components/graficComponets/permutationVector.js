import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';

import SelectStyle from "components/selectStyle";

const PermutationVector = (props) => {

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
      
      <Grid item container
        style={{
          margin: '10px 0'
        }}
        xs={12}
        justifyContent="center"
      >
        <table>
          <td>
            <tr>Variable Name: </tr>
            <tr>Variable Symbol: </tr>
          </td>
          <td>
            <tr>{variableValue.name}</tr>
            <tr>{variableValue.symbol}</tr>
          </td>
        </table>
      </Grid>

      <Grid item xs={10} container justifyContent="center" spacing={2}>
        {
          variableValue.value.map((cityIndex, index) => {
            console.log(problem.problem.objects[cityIndex].attributes[0].value);

            return (
              <Grid item container xs={2} wrap="nowrap" justifyContent="space-around" alignItems="center">
                <Grid item zeroMinWidth
                  style={{
                    paddingRight: 8
                  }}
                >
                  {/* Style Name */}
                  <Typography noWrap
                    style={{
                      border: '1px solid blue',
                      borderRadius: 3,
                      padding: 3,
                      backgroundColor: "lightblue"
                    }}
                  >
                    {problem.problem.objects[cityIndex].attributes[0].value}
                  </Typography>
                </Grid>
                <Grid item
                  style={{
                    paddingLeft: 8
                  }}
                >
                  {/* Work in Arrow */}
                  {variableValue.value.length === index + 1 ? "" : 
                    <TrendingFlatRoundedIcon
                      fontSize='large'
                      style={{
                        color: "#99A3A4"
                      }}
                    />
                  }
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>

    </Grid>
  )
}

export default PermutationVector