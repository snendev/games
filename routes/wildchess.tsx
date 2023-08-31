import Page from "../components/Page.tsx";

import Game from "../islands/Game.tsx";

export default function Wildchess() {
  return (
    <Page repoName="wildchess">
      <Game name="wildchess" />
      <div class="my-6 max-w-xl mx-auto">
        <h2 class="text-lg font-bold">How To Play</h2>
        <p class="mb-2">
          Simply select the piece you want to move and the target square to
          move a piece.
        </p>
        <p class="mb-2">
          When a piece is selected, the blue highlights indicate squares that
          the selected piece can move to, without allowing capture. In
          contrast, red highlights indicate that a capture would be allowed
          on the highlighted square square.
        </p>
        <p class="mb-2">
          Piece icons also provide information about where the piece can move.
          Symbols that surround the "piece" or "king" icons show how many
          squares the piece can move.
          The symbol is blue if only movement is allowed in that pattern, red
          if only capture is allowed, and black if both are allowed.
        </p>
        <p class="mb-2">
          Pieces are still positioned according to a classical chess setup.
          Each game, behavior rules for one pawn, three pairs of "pieces" plus
          a "queen", and a King are generated.
        </p>
        <p class="mb-2">
          Typically, a game is won when the enemy king is captured, and drawn
          if either player enters a "stalemate" (i.e. no moves are possible).
        </p>
        <p class="mb-2">
          Current turn, as well as tooltips for the current selected piece, are
          visible on the right panel.
        </p>
      </div>
    </Page>
  );
}
