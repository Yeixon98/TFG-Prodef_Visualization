import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';

import SelectStyle from "components/selectStyle";

import { perc2color } from "../../store/actions/problemSolutions"

const PermutationVector = (props) => {

  const problem = props.problem
  const selectResult = props.selectResult
  const selectVariable = props.selectVariable
  const variableValue = problem.solution.results[selectResult].variableValues[selectVariable]
  const attrStyle = useSelector(store => store.problemSolutions.attributeStyle)

  const allAttributes = problem.problem.classes[0].attributes.map(attr => attr.symbol).filter(attr => attr !== "name" && attr !== "distance")

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
          </td>
          <td>
            <tr>{variableValue.name}</tr>
          </td>
        </table>
      </Grid>

      <Grid item container xs={11} justifyContent="center">
        {
          variableValue.value.map((cityIndex, index) => {
            const attributes = {}
            problem.problem.objects[cityIndex].attributes.forEach(value => {
              attributes[value.attribute] = value.value
            })

            const nextCityDistance = attributes["distance"][variableValue.value[index + 1]]
            
            let useWidth = attrStyle['width'] === 'default' ? '' : attributes[attrStyle['width']] + 30
            let useHeight = attrStyle['height'] === 'default' ? '' : attributes[attrStyle['height']] + 30
            let useColor = attrStyle['color'] === 'default' ? 0 : attributes[attrStyle['color']]

            return (
              <Grid item container xs wrap="nowrap" justifyContent="space-around" alignItems="center">
                <Grid item
                  style={{
                    paddingRight: 8
                  }}
                >
                  {/* Style Name */}
                  <Typography noWrap
                    style={{
                      border: '1px solid #6afc7d',
                      borderRadius: 3,
                      padding: 3,
                      width: useWidth,
                      height: useHeight,
                      color: useColor === 0 ? '#000000' : useColor <= 128 ? 'white' : 'black',
                      backgroundColor: useColor === 0 ? "#bbffc4" : perc2color(useColor),
                      textAlign: "center"
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
                  {variableValue.value.length === index + 1 ? <></> : 
                    <Grid>
                      <div
                        style={{
                          textAlign: "center",
                          marginBottom: "-15px"
                        }}
                      >
                        {nextCityDistance}
                      </div>
                      <TrendingFlatRoundedIcon
                        fontSize='large'
                        style={{
                          color: "#575757",
                        }}
                      />
                    </Grid>
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