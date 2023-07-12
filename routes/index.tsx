import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Snendev Game Lab</title>
      </Head>
      <div class="container p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          This is where I post game projects, please try them out!
        </p>
        <li>
          <ul>
            <a href="/cricket-pong">CricketPong</a>
          </ul>
        </li>
      </div>
    </>
  );
}
