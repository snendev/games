import Page from "../components/Page.tsx";

import Game from "../islands/Game.tsx";

export default function CricketPong() {
  return (
    <Page repoName="cricket-pong">
      <Game name="cricket-pong" />
      <div class="my-6 max-w-xl mx-auto">
        <h2 class="text-lg font-bold">How To Play</h2>
        <p class="mb-1">
          Cricket Pong is played by two players, using the QWAS+Space keys for
          player 1 and UIJK+RShift keys for player 2.
        </p>
        <p class="mb-1">
          Right now there is no score limit or a set number of overs, so play
          continues until the page is closed.
        </p>
        <p class="mb-1 font-semibold">When batting:</p>
        <ul class="mb-2">
          <li>Q/U: Swing counter-clockwise</li>
          <li>W/I: Swing clockwise</li>
          <li>A/J: Move slowly counter-clockwise</li>
          <li>S/K: Move slowly clockwise</li>
        </ul>
        <p class="mb-1 font-semibold">When fielding:</p>
        <ul>
          <li>Q/U: Rotate outfield counter-clockwise</li>
          <li>W/I: Rotate outfield clockwise</li>
          <li>A/J: Rotate infield counter-clockwise</li>
          <li>S/K: Rotate infield clockwise</li>
          <li>Space/RShift: Bowl the ball</li>
        </ul>
      </div>
    </Page>
  );
}
