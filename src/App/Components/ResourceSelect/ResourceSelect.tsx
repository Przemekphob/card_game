import React from "react";
import { FormControl, Grid, MenuItem, Select, Typography } from "@material-ui/core";
import { resources } from "../../Types";
import { useStyles } from "./styles";

interface Props {
  handleSelectValue: (e: any) => void;
  selectValue: string;
  title: string;
}

export const ResourceSelect = (props: Props) => {
  const classes = useStyles();
  const defaultSelectValue = "Select resource";
  const { handleSelectValue, selectValue, title } = props;

  return (
    <Grid item={true} xs={8}>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <FormControl className={classes.formControll} variant="outlined">
        <Select
          value={selectValue}
          onChange={handleSelectValue}
          className={classes.select}
          data-testid="selectResource"
        >
          <MenuItem value={defaultSelectValue} disabled data-testid="selectResourceItem">{defaultSelectValue}</MenuItem>
          <MenuItem value={resources.PEOPLE} data-testid="selectResourceItem">{resources.PEOPLE}</MenuItem>
          <MenuItem value={resources.STARSHIPS} data-testid="selectResourceItem">{resources.STARSHIPS}</MenuItem>
        </Select>
      </FormControl>
    </Grid >
  )
};



