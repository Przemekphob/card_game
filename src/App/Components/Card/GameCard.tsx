import { Card, CardContent, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { PeopleAttributesType, resources, StarshipsAttributesType } from "../../Types";
import { Counter } from "../Counter";
import { useStyles } from "./styles";

interface Props {
  count: number;
  results: any[];
  selectValue: string;
  handleCommonAttributeValue: (value: string) => void;
  playerWon: boolean;
  player: string;
  playerCount: number;
  newRound: boolean;
  handleNextRound: (next: boolean) => void;
}

export const GameCard = (props: Props) => {
  const { count, results, selectValue, handleCommonAttributeValue, playerWon, player, playerCount, newRound, handleNextRound } = props;
  const classes = useStyles();
  const [playerPeopleCard, setPlayerPeopleCard] = useState<PeopleAttributesType | undefined>(undefined)
  const [playerStarshipCard, setPlayerStarshipCard] = useState<StarshipsAttributesType | undefined>(undefined)


  useEffect(() => {
    if (results.length !== 0 && results.length === count) {
      let randomIndex = Math.floor(Math.random() * results.length);
      if (selectValue === resources.PEOPLE) {
        setPlayerPeopleCard(results[randomIndex]);
      }
      if (selectValue === resources.STARSHIPS) {
        setPlayerStarshipCard(results[randomIndex]);
      }
    }
  }, [count, results, selectValue]);

  useEffect(() => {
    if (results.length && newRound) {
      let randomIndex = Math.floor(Math.random() * results.length);
      if (selectValue === resources.PEOPLE) {
        setPlayerPeopleCard(results[randomIndex]);
        handleNextRound(false);
      }
      if (selectValue === resources.STARSHIPS) {
        setPlayerStarshipCard(results[randomIndex]);
        handleNextRound(false);
      }
    }
  }, [newRound]);

  const renderPeopleCard = () => {
    if (playerPeopleCard !== undefined) {
      handleCommonAttributeValue(playerPeopleCard.mass);
      return (
        <Card variant="outlined" className={playerWon ? classes.cardWrapper : ""} data-testid="gameCard">
          {Object.entries(playerPeopleCard).map(([key, val], index: number) => {
            return (
              <CardContent key={index} className={classes.cardRow}>
                <Typography color="textPrimary" variant="h6" className={classes.keyName}>
                  {key}:
                </Typography>
                <Typography color="textSecondary" variant="h6" className={classes.innerList}>
                  {(typeof val === "string" ? true : false) ? val : val.map((item: string, innerIndex: number) => <span key={`${index}${innerIndex}`}>{item}</span>)}
                </Typography>
              </CardContent>
            )
          })}
        </Card>
      )
    }
    return <></>;
  };

  const renderStarshipCard = () => {
    if (playerStarshipCard !== undefined) {
      handleCommonAttributeValue(playerStarshipCard.crew);
      return (
        <Card variant="outlined" className={playerWon ? classes.cardWrapper : ""} data-testid="gameCard">
          {Object.entries(playerStarshipCard).map(([key, val], index: number) => {
            return (
              <CardContent key={index} className={classes.cardRow}>
                <Typography color="textPrimary" variant="h6" className={classes.keyName}>
                  {key}:
                </Typography>
                <Typography color="textSecondary" variant="h6" className={classes.innerList}>
                  {(typeof val === "string" ? true : false) ? val : val.map((item: string, innerIndex: number) => <span key={`${index}${innerIndex}`}>{item}</span>)}
                </Typography>
              </CardContent>
            )
          })}
        </Card>
      )
    }
    return <></>;
  };

  const renderWinnerInfo = () => <Typography color="textSecondary" variant="h4" className={classes.title}>{player} won the game</Typography>;

  return (
    <>
      <Counter playerCount={playerCount} player={player} />
      {renderPeopleCard()}
      {renderStarshipCard()}
      {playerWon && renderWinnerInfo()}
    </>
  );
}
