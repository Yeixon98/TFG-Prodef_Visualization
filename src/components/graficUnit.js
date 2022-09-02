import { Grid } from "@material-ui/core";
import React from "react";
import BinaryMatrix from "./graficComponets/binaryMatix";
import BinaryVector from "./graficComponets/binaryVector";
import IntegerMatrix from "./graficComponets/integerMatrix";
import PermutationMatrix from "./graficComponets/permutationMatrix";
import PermutationVector from "./graficComponets/permutationVector";

const GraficUnit = (props) => {
  const problem = props.problem;
  const selectResult = props.selectResult;
  const selectVariable = props.selectVariable;
  const variableValue =
    problem.solution.results[selectResult].variableValues[selectVariable];

  if (variableValue.shape.type === "vector") {
    if (
      variableValue.range.lowerBound === 0 &&
      variableValue.range.upperBound === 1
    ) {
      // Vector Binario
      return (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <BinaryVector
              problem={problem}
              selectResult={selectResult}
              selectVariable={selectVariable}
            />
          </Grid>
        </Grid>
      );
    } else if (variableValue.shape.isPermutation) {
      // Vector con Permutacion
      return (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <PermutationVector
              problem={problem}
              selectResult={selectResult}
              selectVariable={selectVariable}
            />
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <h1>Uncatch Type Solution</h1>
          </Grid>
        </Grid>
      );
    }
  } else if (variableValue.shape.type === "matrix") {
    if (
      variableValue.range.lowerBound === 0 &&
      variableValue.range.upperBound === 1
    ) {
      // Matiz Binaria
      return (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <BinaryMatrix
              problem={problem}
              selectResult={selectResult}
              selectVariable={selectVariable}
            />
          </Grid>
        </Grid>
      );
    } else if (variableValue.shape.isPermutation) {
      // Matriz con Permutacion
      return (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <PermutationMatrix
              problem={problem}
              selectResult={selectResult}
              selectVariable={selectVariable}
            />
          </Grid>
        </Grid>
      );
    } else {
      // Matriz de Entero
      return (
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <IntegerMatrix
              problem={problem}
              selectResult={selectResult}
              selectVariable={selectVariable}
            />
          </Grid>
        </Grid>
      );
    }
  } else {
    return (
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <h1>Uncatch Type Solution</h1>
        </Grid>
      </Grid>
    );
  }
};

export default GraficUnit;
