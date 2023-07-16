import type { VNode } from "preact";

import GithubIcon from "./GithubIcon.tsx";

interface PageProps {
  children: VNode;
  repoName?: string;
}

export default function Page({ children, repoName }: PageProps) {
  return (
    <div class="flex flex-col justify-start items-center w-full h-full min-h-screen bg-blueGray-200">
      <header class="w-full flex-none flex justify-center py-6 border-b border-black">
        <div class="container flex justify-between items-center">
          <h2 class="text-3xl">snen.dev</h2>
          <nav>
            <a href={`https://github.com/snendev/${repoName ?? "games"}`}>
              <GithubIcon size={36} />
            </a>
          </nav>
        </div>
      </header>
      <main class="container flex-1 py-12">
        {children}
      </main>
    </div>
  );
}
