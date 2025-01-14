export default function HowTo() {
  return (
    <main class="mx-auto text-gray-700 p-4 max-w-xl">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        QChess Gameplay
      </h1>

      <section class="mb-8">
        <h2 class="text-4xl text-sky-600 mb-4">Board Layout</h2>
        <img src="/gameplay/board.png" class="mb-4" />
        <p>
          The QChess board resembles a standard chessboard, but with a key
          twist: all pieces, except the king, exist in a superposition of
          loyalty. Each piece is treated as a qubit with two collapsible states
          (Black and White). Players can apply quantum gates to manipulate these
          states, which affect the probabilities of the piece being controlled
          by either side.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-4xl text-sky-600 mb-4">Quantum Actions</h2>
        <p>
          On each turn, before making a move, the player can perform a quantum
          action by applying a quantum gate to any piece on the board.
        </p>
        <img src="/gameplay/gates.png" class="mb-4" />
        <h3 class="text-2xl text-sky-500 mb-2">Superposition</h3>
        <img src="/gameplay/superposition.png" class="mb-4" />
        <p>
          For example, applying an <strong>H-gate</strong> to a pawn puts its
          loyalty into a superposition of <code>|black⟩ + |white⟩</code>. This
          means there is now a 50/50 chance the pawn will switch sides when
          measured. The probability is reflected by a bar on the piece.
        </p>
        <h3 class="text-2xl text-sky-500 my-2">Entanglement</h3>
        <img src="/gameplay/CNOT.png" class="mb-4" />
        <p>
          Players can entangle the loyalty of multiple pieces, typically using a
          combination of the <strong>H-gate</strong> and the{" "}
          <strong>CNOT gate</strong>. This creates a quantum correlation between
          the pieces. When one piece's loyalty is measured, it instantly
          determines the loyalty of any entangled pieces.
        </p>
        <img src="/gameplay/entanglement.png" class="my-4" />
        <p>
          Pieces that are entangled share the same red background on the board,
          signifying that they are part of the same quantum circuit. A red link
          is formed between these pieces to indicate their quantum correlation.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-4xl text-sky-600 mb-4">
          Measurement and Switching Sides
        </h2>
        <img src="/gameplay/measure.png" class="my-4" />

        <p>
          Players can only move pieces of their own color. To change a piece's
          color, the player must measure the piece's loyalty. Once measured,
          Qiskit simulates the quantum circuit, and the outcome of the
          measurement determines whether the piece switches sides or remains the
          same. Any entangled pieces are also updated based on this measurement.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-4xl text-sky-600 mb-4">Victory Condition</h2>
        <p>
          The game ends when a player's king is captured. Strategy and quantum
          manipulation of piece loyalty play a crucial role in determining the
          outcome of the game.
        </p>
      </section>
    </main>
  );
}
