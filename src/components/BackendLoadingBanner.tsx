import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { backendLoaded, flow, setBackendLoaded } from "~/signals";
import { BACKEND_URL } from "~/utils";

export default function BackendLoadingBanner() {
  const [dotN, setDotN] = createSignal(0);
  onMount(() => {
    const t = setInterval(() => {
      setDotN((dotN() + 1) % 4);
    }, 250);
    onCleanup(() => {
      clearInterval(t);
    });
  });

  onMount(async () => {
    try {
      const api_route = `${BACKEND_URL}/measure`;
      const payload = {
        actions: [
          {
            gate: "h",
            args: ["qubit0"],
          },
        ],
        qubits: [
          {
            id: "qubit0",
            classicalState: 0,
          },
        ],
      };
      const response = await fetch(api_route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("test backend", data);
        setBackendLoaded("loaded");
      }
    } catch (e) {
      console.error("e", e);
      setBackendLoaded("error");
    }
  });

  return (
    <Show when={backendLoaded() !== "loaded"}>
      <div
        data-black={flow() === "ended-black-win"}
        class="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-50 bg-white data-[black=true]:bg-black px-8 py-4 border-4 drop-shadow border-black data-[black=true]:border-white text-black data-[black=true]:text-white
        flex flex-col items-center space-y-1"
      >
        <Show
          when={backendLoaded() == "not_loaded"}
          fallback={
            <>
              <div class="text-4xl font-bold">Error: Cannot load backend</div>
              <div class="">Please try again later</div>
            </>
          }
        >
          <div class="text-4xl font-bold">
            Backend is loading{"...".slice(0, dotN())}
          </div>
          <div class="">Usually takes around a minute, please wait</div>
        </Show>
      </div>
    </Show>
  );
}
