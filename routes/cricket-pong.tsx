import { Head } from "$fresh/runtime.ts";

import Game from "../islands/Game.tsx";

export default function CricketPong() {
  return (
    <>
      <Head>
        <title>snendev game lab</title>
      </Head>
      <div class="container p-4 mx-auto max-w-screen-md">
        <Game name="cricket-pong" />
      </div>
    </>
  );
}
