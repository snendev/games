import { useEffect } from "preact/hooks";

interface WasmGameProps {
  name: string
}

export default function WasmGame({ name }: WasmGameProps) {
  useEffect(() => {
    async function startGame() {
      await import(`/wasm/${name.split('-').join('_')}_app_wasm.js`);
    }
    startGame();
  }, []);

  return (
    <div class="flex justify-center">
      <canvas id="game-canvas" />
    </div>
  );
}
