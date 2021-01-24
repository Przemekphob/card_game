import { Button, Grid } from "@material-ui/core";
import React from "react";

interface Props {
  handleNextRound: (next: boolean) => void;
  selectValue: string;
  nextPage: string | null;
}

export const NextRoundButton = (props: Props) => {
  const { handleNextRound, selectValue, nextPage } = props;

  const handleNext = () => handleNextRound(true);
  return (
    <Grid item={true} xs={3}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleNext}
        disabled={selectValue !== "" && nextPage === null ? false : true}
        data-testid="nextRoundButton"
      >
        Next round
      </Button>
    </Grid >
  )
};



