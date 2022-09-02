import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

import SelectStyle from "components/selectStyle";

import { perc2color } from "../../store/actions/problemSolutions"

const IntegerMatrix = (props) => {

  const problem = props.problem
  const selectResult = props.selectResult
  const selectVariable = props.selectVariable
  const variableValue = problem.solution.results[selectResult].variableValues[selectVariable]
  const attrStyle = useSelector(store => store.problemSolutions.attributeStyle)

  const lengthRow = variableValue.value.length
  const lengthCol = variableValue.value[0].length
  const allClass = problem.problem.classes.map((_class) => {
    return _class.symbol
  })
  const objects = allClass.map(symbol => {
    return problem.problem.objects.filter(object => object.class === symbol)
  })

  let objectsRow = []
  objects.forEach((object, index) => {
    if (object.length === lengthRow) {
      objectsRow = object
      objects.splice(index, 1)
      return
    }
  });
  
  let objectsCol = []
  objects.forEach((object, index) => {
    if (object.length === lengthCol) {
      objectsCol = object
      objects.splice(index, 1)
      return
    }
  });

  let objectsContent = objects[0]

  // TODO: Usar colores random???
  // Add 20 colors
  const colorTask = [
    "#FF6666","#FFB266","#FFFF66","#B2FF66","#66FFB2","#66FFFF","#66B2FF","#B266FF","#FF66FF","#FF66B2",
    "#FF0000","#FF8000","#FFFF00","#80FF00","#00FF80","#00FFFF","#0080FF","#8000FF","#FF00FF","#FF0080",
    "#990000","#994C00","#999900","#4C9900","#00994C","#009999","#004C99","#4C0099","#990099","#99004C",
  ];
  objectsContent.forEach(() => {
    colorTask.push('#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6))
  })

  const allAttributes = objectsContent[0].attributes.map(attr => attr.attribute).filter(attribute => attribute !== "name")

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
        <table
          style={{
            borderTop: "2px solid #5858c4",
            borderRight: "2px solid #5858c4",
            borderCollapse: "collapse",
            backgroundColor: "#cbcbff",
            color: "black"
          }}
        >
          {
            variableValue.value.map((valueRow, indexRow) => {
              return (
                <tr>
                  {/* Machine */}
                  <td
                    style={{
                      padding: 7,
                      border: "2px solid #5858c4",
                    }}
                  >
                    {objectsRow[indexRow].attributes[0].value}
                  </td>
                  {
                    valueRow.map(valueCol => {
                      if (valueCol > -1) {
                        // Configurar el estilo dinamico aqui
                        const attributes = {}
                        objectsContent[valueCol].attributes.forEach(value => {
                          attributes[value.attribute] = value.value
                        })
  
                        let useWidth = attrStyle['width'] === 'default' ? 'auto' : attributes[attrStyle['width']] * 1.5 + 40
                        let useHeight = attrStyle['height'] === 'default' ? 'auto' : attributes[attrStyle['height']] * 1.5 + 20
                        let useColor = attrStyle['color'] === 'default' ? 0 : attributes[attrStyle['color']] % 100

                        return (
                          <td
                          style={{
                            borderBottom: "2px solid #5858c4",
                            backgroundColor: useHeight === 'auto' ? useColor === 0 ? colorTask[valueCol % colorTask.length] : perc2color(useColor) : "inherit",
                          }}
                          >
                            <Typography
                              // Aplicar el estilo dinamico aqui
                              style={{
                                padding: 5,
                                backgroundColor: useHeight !== 'auto' ? useColor === 0 ? colorTask[valueCol % colorTask.length] : perc2color(useColor) : 'inherit',
                                margin: useHeight !== 'auto' ? "1px -2px 1px 0" : 0,
                                width: useWidth,
                                height: useHeight,
                                color: useColor === 0 ? '#000000' : useColor <= 128 ? 'white' : 'black',
                              }}
                            >
                              {objectsContent[valueCol].attributes[0].value}
                            </Typography>
                          </td>
                        )
                      } else {
                        return (
                          <td
                            style={{
                              borderBottom: "2px solid #5858c4"
                            }}
                          ></td>
                        )
                      }
                    })
                  }
                </tr>
              )
            })
          }
          <tr>
            <td
              style={{
                backgroundColor: "white",
                borderLeft: "2px solid white",
                borderBottom: "1px solid white"
              }}
            ></td>
            {
              objectsCol.map(valueCol => {
                return (
                  // Time
                  <td
                    style={{
                      padding: 7,
                      border: "2px solid #5858c4",
                    }}
                  >
                    {valueCol.attributes[0].value}
                  </td>
                )
              })
            }
          </tr>
      </table>
      </Grid>

    </Grid>
  )
}

export default IntegerMatrix