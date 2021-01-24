import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { ResourceSelect } from "./Components/ResourceSelect";
import { useStyles } from "./styles";
import getResourceData from "./Services";
import { GameCard } from "./Components/Card";
import { NextRoundButton } from "./Components/NextRoundButton";

export const App = () => {
  const classes = useStyles();
  const [selectValue, setSelectValue] = useState<string>("");
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [firstPlayerCount, setFirstPlayerCount] = useState<number>(0);
  const [secondPlayerCount, setSecondPlayerCount] = useState<number>(0);
  const [firstPlayerCommonAttribute, setFirstPlayerCommonAttribute] = useState<string>("");
  const [secondPlayerCommonAttribute, setSecondPlayerCommonAttribute] = useState<string>("");
  const [firstPlayerWon, setFirstPlayerWon] = useState<boolean>(false);
  const [secondPlayerWon, setSecondPlayerWon] = useState<boolean>(false);
  const [newRound, setNewRound] = useState<boolean>(false);

  const handleSelectValue = (e: any) => setSelectValue(e.target.value);

  useEffect(() => {
    if (selectValue !== "") {
      setResults([]);
      handleGetResources(selectValue, null);
    }
    setFirstPlayerCount(0);
    setSecondPlayerCount(0);
    setFirstPlayerCommonAttribute("");
    setSecondPlayerCommonAttribute("");
    setFirstPlayerWon(false)
    setSecondPlayerWon(false);
  }, [selectValue]);

  useEffect(() => {
    if (selectValue !== "" && nextPage !== null) {
      handleGetResources(selectValue, nextPage);
    }
  }, [nextPage, selectValue]);

  useEffect(() => {
    if (firstPlayerCommonAttribute !== undefined && Number(firstPlayerCommonAttribute) > Number(secondPlayerCommonAttribute)) {
      setFirstPlayerWon(true);
      setSecondPlayerWon(false);
    } else if (secondPlayerCommonAttribute !== undefined && Number(secondPlayerCommonAttribute) > Number(firstPlayerCommonAttribute)) {
      setFirstPlayerWon(false);
      setSecondPlayerWon(true);
    } else if (firstPlayerCommonAttribute !== undefined && secondPlayerCommonAttribute === "unknown") {
      setFirstPlayerWon(true);
      setSecondPlayerWon(false);
    } else if (secondPlayerCommonAttribute !== undefined && firstPlayerCommonAttribute === "unknown") {
      setFirstPlayerWon(false);
      setSecondPlayerWon(true);
    } else {
      setFirstPlayerWon(false);
      setSecondPlayerWon(false);
    }
  }, [firstPlayerCommonAttribute, secondPlayerCommonAttribute]);

  useEffect(() => {
    if (firstPlayerWon && !secondPlayerWon) {
      setFirstPlayerCount(firstPlayerCount => firstPlayerCount + 1);
    } else if (secondPlayerWon && !firstPlayerWon) {
      setSecondPlayerCount(secondPlayerCount => secondPlayerCount + 1);
    }
  }, [firstPlayerWon, secondPlayerWon]);

  const handleGetResources = (resource: string, next: string | null) => {
    getResourceData(resource, next).then((res) => {
      setNextPage(res.next);
      setResults(results => [...results, ...res.results]);
      setCount(res.count)
    });
  }

  const handleFirstPlayerCommonAttribute = (value: string) => setFirstPlayerCommonAttribute(value);
  const handleSecondPlayerCommonAttribute = (value: string) => setSecondPlayerCommonAttribute(value);
  const handleNextRound = (next: boolean) => {
    setFirstPlayerWon(false)
    setSecondPlayerWon(false);
    setNewRound(next);
  }

  const renderCards = () => {
    if (results.length && nextPage === null) {
      return (
        <>
          <Grid item xs={5}>
            <GameCard
              count={count}
              results={results}
              selectValue={selectValue}
              handleCommonAttributeValue={handleFirstPlayerCommonAttribute}
              playerWon={firstPlayerWon}
              player="First player"
              playerCount={firstPlayerCount}
              newRound={newRound}
              handleNextRound={handleNextRound}
            />
          </Grid>
          <Grid item xs={5}>
            <GameCard
              count={count}
              results={results}
              selectValue={selectValue}
              handleCommonAttributeValue={handleSecondPlayerCommonAttribute}
              playerWon={secondPlayerWon}
              player="Second player"
              playerCount={secondPlayerCount}
              newRound={newRound}
              handleNextRound={handleNextRound}
            />
          </Grid>
        </>
      )
    } else if (results.length && nextPage !== null) {
      return <CircularProgress color="secondary" />;
    }
    return <></>;
  }

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.root}>
      <ResourceSelect handleSelectValue={handleSelectValue} selectValue={selectValue} title={"Select resource for game:"} />
      <NextRoundButton handleNextRound={handleNextRound} selectValue={selectValue} nextPage={nextPage} />
      <Grid container direction="row" justify="space-around" alignItems="flex-start">
        {renderCards()}
      </Grid>
    </Grid>
  )
};
