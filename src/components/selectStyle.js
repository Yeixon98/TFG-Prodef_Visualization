import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Typography,
  NativeSelect,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { updateAttributeStyle } from "../store/actions/problemSolutions";

const SelectStyle = (props) => {
  const dispatch = useDispatch();

  const [attributeSelected, setAttributeSelected] = useState("default");
  const handleSelectAttribute = (event) => {
    setAttributeSelected(event.target.value);
  };

  const [styleSelected, setStyleSelected] = useState("default");
  const handleSelectStyle = (event) => {
    setStyleSelected(event.target.value);
  };

  const attributes = props.attributes;
  const styles = props.styles;

  return (
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Divider
          style={{
            margin: "10px 0",
          }}
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        spacing={1}
        alignItems="center"
      >
        <Grid item container justifyContent="center" alignItems="center" xs={2}>
          <Grid item>
            <Typography>Attributes:</Typography>
          </Grid>
          <Grid
            item
            style={{
              margin: "0 5px",
            }}
          >
            <NativeSelect
              disableUnderline
              onChange={handleSelectAttribute}
              inputProps={{
                name: "attribute",
                id: "attribute-native-helper",
              }}
              variant="filled"
            >
              <option value={null}></option>
              {attributes.map((attribute) => {
                return (
                  <option value={attribute}>
                    {attribute[0].toUpperCase() + attribute.substring(1)}
                  </option>
                );
              })}
            </NativeSelect>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" alignItems="center" xs={2}>
          <Grid item>
            <Typography>Styles:</Typography>
          </Grid>
          <Grid
            item
            style={{
              margin: "0 5px",
            }}
          >
            <NativeSelect
              disableUnderline
              onChange={handleSelectStyle}
              inputProps={{
                name: "attribute",
                id: "attribute-native-helper",
              }}
              variant="filled"
            >
              <option value={null}></option>
              {styles.map((attribute) => {
                return (
                  <option value={attribute}>
                    {attribute[0].toUpperCase() + attribute.substring(1)}
                  </option>
                );
              })}
            </NativeSelect>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center" xs={2}>
          <Grid item>
            <Button
              style={{
                textTransform: "none",
                fontSize: 16,
                padding: 3,
              }}
              onClick={() => {
                dispatch(
                  updateAttributeStyle(attributeSelected, styleSelected)
                );
              }}
            >
              Apply
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                textTransform: "none",
                fontSize: 16,
                padding: 3,
              }}
              onClick={() => {
                dispatch({
                  type: "resetAttrStyle",
                });
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SelectStyle;
