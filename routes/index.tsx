import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Snendev Game Lab</title>
      </Head>
      <div class="container p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          This is where I post WIP game projects, please feel free to try them out!
        </p>
        <li>
          <ul>
            <a href="/cricket-pong">Cricket Pong</a>
          </ul>
        </li>
      </div>
    </>
  );
}
