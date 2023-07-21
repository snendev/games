import { useEffect, VNode } from "preact/hooks";

interface WasmGameProps {
  name: string
  description: VNode,
}

export default function WasmGame({ name, description }: WasmGameProps) {
  useEffect(() => {
    async function startGame() {
      await import(`/wasm/${name.split('-').join('_')}.js`);
    }
    startGame();
  }, []);
  return (
    <div class="flex justify-center">
      <canvas id="game-canvas" />
    </div>
  );
}
