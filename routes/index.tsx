import Page from "../components/Page.tsx";

interface Game {
  name: string
  description: string
}

const GAMES: Game[] = [
  {
    name: 'cricket-pong',
    description: 'Pong in a circle, a pitching vs. batting duel',
  },
]

export default function Home() {
  return (
    <Page>
      <p class="my-6">
        This is where I post WIP game projects, please feel free to try them out!
      </p>
      <ul class="flex flex-grid items-center">
        {GAMES.map(({ name, description }) => (
          <li key={name} class="my-5">
            <div class="flex">
              <a href={`/${name}`}>
                <img
                  class="w-40"
                  alt={`${name} - ${description}`}
                  src={`/previews/${name}-preview.png`}
                />
              </a>
              <div class="border border-blueGray-600 p-4">
                <div class="border-b border-blueGray-400 mb-4">
                  <a
                    class="text-lg"
                    href={`/${name}`}
                  >
                    {name.split('-').join(' ')}
                  </a>
                </div>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Page>
  );
}
