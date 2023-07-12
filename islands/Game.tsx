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

  return <canvas id="game-canvas" />;
}
