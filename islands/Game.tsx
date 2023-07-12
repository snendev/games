import { useEffect } from "preact/hooks";

interface WasmGameProps {
  name: string
}

export default function WasmGame({ name }: WasmGameProps) {
  useEffect(() => {
    async function startGame() {
      await import(`../wasm/${name}.js`);
    }
    startGame();
  }, []);

  return <canvas id="game-canvas" />;
}
