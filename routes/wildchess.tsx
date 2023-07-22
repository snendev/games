import Page from "../components/Page.tsx";

import Game from "../islands/Game.tsx";

export default function Wildchess() {
  return (
    <Page repoName="wildchess">
      <Game name="wildchess" />
      <div class="my-6 max-w-xl mx-auto">
        <h2 class="text-lg font-bold">How To Play</h2>
        <p class="mb-1">
          Simply select the piece you want to move and the target square to
          move a piece. The blue highlighted squares are squares that the piece
          can move to without allowing capture, whereas red highlights indicate
          that a capture would be allowed on that square.
        </p>
        <p class="mb-1">
          When a piece is selected, the blue highlights indicate squares that
          the selected piece can move to, without allowing capture. In
          contrast, red highlights indicate that a capture would be allowed
          on the highlighted square square.
        </p>
        <p class="mb-1">
          As of right now, this board is simply a sandbox board, so there is no
          sense of whose turn it is or whether someone has "won".
        </p>
        <p class="mb-1">
          Typically, a game is won when the enemy king is captured, and drawn
          if either player enters a "stalemate" (i.e. no moves are possible).
        </p>
      </div>
    </Page>
  );
}
