import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

interface Props {
  playerCount: number;
  player: string;
}

export const Counter = (props: Props) => {
  const classes = useStyles();

  const { playerCount, player } = props;
  return (
    <Grid item={true} xs={6} className={classes.title} data-testid="counter">
      {player} count:
      <Avatar variant="rounded">{playerCount}</Avatar>
    </Grid >
  )
};



