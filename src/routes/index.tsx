import { A } from "@solidjs/router";
import { Show } from "solid-js";
import Counter from "~/components/Counter";
import { flow, pickAnother } from "~/signals";

export default function Home() {
  return (
    <div class="h-screen flex items-center  flex-col space-y-4">
      <div class="text-center pt-8 space-y-1">
        <div class="text-2xl font-bold">QChess</div>
        <div class="text-sm">A game about superposition and loyalty</div>
      </div>

      {/* <div class="h-4">
        <div ref={setLatexEl}></div>
      </div> */}

      <div class="relative">
        {/* <div class="absolute top-0 left-0 bottom-0 -translate-x-full flex flex-col">
          <div class=" flex-1 flex max-w-72 flex-wrap">
            <For each={capturedWhites()}>
              {(p) => <PieceImg size="sm" piece={p} />}
            </For>
          </div>
          <div class=" flex-1 flex max-w-72 flex-wrap-reverse">
            <For each={capturedBlacks()}>
              {(p) => <PieceImg size="sm" piece={p} />}
            </For>
          </div>
        </div> */}

        {/* <div
          class="text-center bg-black text-white py-1 invisible data-[show=true]:visible"
          data-show={flow() == "turn-black"}
        >
          black's turn
        </div> */}

        {/* <div class="bg-white  flex-1  grid grid-cols-8 relative">
          <GameEndedBanner />
          <For each={squares}>{(_, i) => <Square i={i()} />}</For>
        </div> */}

        <div
          class="text-center bg-white text-black py-1 invisible data-[show=true]:visible"
          data-show={flow() == "turn-white"}
        >
          white's turn
        </div>

        <Show when={pickAnother()}>
          <div class="text-center py-2">Pick CNOT's target qubit</div>
        </Show>
      </div>
    </div>
  );
}
