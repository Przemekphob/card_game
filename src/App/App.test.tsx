import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { NextRoundButton } from './Components/NextRoundButton';
import ReactDOM from 'react-dom';
import { ResourceSelect } from './Components/ResourceSelect';
import { Counter } from './Components/Counter';
import { GameCard } from './Components/Card';

it("renders app without crashing", () => {
  shallow(<App />);
});

it("renders NextRoundButton", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NextRoundButton handleNextRound={() => { }} selectValue={"test"} nextPage={"test"} />, div)
});

it("renders ResourceSelect", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResourceSelect handleSelectValue={() => { }} selectValue={"test value"} title={"Select resource for game:"} />, div)
});

it("renders Counter", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Counter playerCount={10} player={"player"} />, div)
});

it("renders GameCard", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <GameCard
      count={10}
      results={[]}
      selectValue="selectValue"
      handleCommonAttributeValue={() => { }}
      playerWon={true}
      player="Second player"
      playerCount={10}
      newRound={true}
      handleNextRound={() => { }}
    />, div)
});
