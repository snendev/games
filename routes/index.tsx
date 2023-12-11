import Page from "../components/Page.tsx";

interface Game {
    slug: string
    name: string
    description: string
}

const GAMES: Game[] = [
    {
        slug: 'cricket-pong',
        name: 'Cricket Pong',
        description: 'Pong in a circle, a bowling vs. batting duel',
    },
    {
        slug: 'wildchess',
        name: 'Wild Chess',
        description: 'Chess with randomized piece behaviors.',
    },
    {
        slug: 'cheese',
        name: 'Cheese Rolling: Forever',
        description: 'Dodge the falling ragdolls! A Bevy Jam submission inspired by the Cooper\'s Hill Cheese Rolling.',
    }
]

export default function Home() {
    return (
        <Page>
            <p class="my-6">
                This is where I post WIP game projects, please feel free to try them out!
            </p>
            <ul class="flex flex-wrap items-center gap-6">
                {GAMES.map(({ name, slug, description }) => (
                    <li key={slug} class="border border-blueGray-600 w-5/12">
                        <div class="flex">
                            <a href={`/${slug}`}>
                                <img
                                    class="h-32"
                                    alt={`${name} - ${description}`}
                                    src={`/previews/${slug}-preview.png`}
                                />
                            </a>
                            <div class="p-4 flex-1">
                                <div class="border-b border-blueGray-400 mb-4">
                                    <a
                                        class="text-lg"
                                        href={`/${slug}`}
                                    >
                                        {name}
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
