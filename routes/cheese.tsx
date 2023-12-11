import { Head } from '$fresh/runtime.ts'

import Page from "../components/Page.tsx";

import Game from "../islands/Game.tsx";

export default function Cheese() {
    return (
        <Page repoName="cheese">
            <Head>
                <script src="js/restart_audio_context.js"></script>
            </Head>
            <Game name="cheese" />
            <div class="my-6 max-w-xl mx-auto">
                <h2 class="text-lg font-bold">How To Play</h2>
                <p class="mb-1">
                    Cheese is played by one player. Try to dodge the ragdolls as you roll down the hill.

                    Use Left and Right to steer and move the cheese. Press Space to look up the hill.
                </p>
            </div>
            <div class="my-6 max-w-xl mx-auto">
                <h2 class="text-lg font-bold">Notes</h2>
                <p class="mb-1">
                    This version is slightly downgraded from the downloadable version, which you can find
                    on the{' '}
                    <a href="https://snendev.itch.io/cheese-rolling-forever" class="text-blue-600 cursor-pointer">
                        itch.io page
                    </a>{' '}
                    or on{' '}
                    <a href="https://github.com/snendev/cheese-rolling-forever/releases" class="text-blue-600 cursor-pointer">
                        GitHub
                    </a>
                    .
                </p>
                <p class="mb-1">
                    Please feel free to report bugs as{' '}
                    <a href="https://github.com/snendev/cheese-rolling-forever/issues" class="text-blue-600 cursor-pointer">
                        GitHub issues
                    </a>.
                </p>
            </div>
            <div class="my-6 max-w-xl mx-auto">
                <h2 class="text-lg font-bold">Credits</h2>
                <p class="mb-1">
                    Background theme music made by Connor Szostak
                </p>
                <p class="mb-1">
                    Cheese wheel asset made by Collum Freedman
                </p>
                <p class="mb-1">
                    For more, check the <a href="https://github.com/snendev/cheese/blob/main/game/assets/sources.txt" class="text-blue-600 cursor-pointer">assets directory</a>.
                </p>
            </div>
        </Page>
    );
}

// needs this to restart audio context?
// https://github.com/bevyengine/bevy_github_ci_template/pull/30/files#diff-046a86afbd1e462e2e6636af283ed61008f69ef3714c49da9539fd7b68eb7f20R1
// taken from https://developer.chrome.com/blog/web-audio-autoplay/#moving-forward
