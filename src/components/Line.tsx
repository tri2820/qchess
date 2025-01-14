import { createEffect, createSignal } from "solid-js";

export default function Line(props: { fromDivId: string; toDivId: string }) {
  const [lineStyle, setLineStyle] = createSignal({});

  const updateLine = () => {
    const fromElem = document.getElementById(props.fromDivId);
    const toElem = document.getElementById(props.toDivId);
    const containerElem = document.getElementById("board-container");

    if (!fromElem || !toElem || !containerElem) return;

    // Get the container's bounding rectangle
    const containerRect = containerElem.getBoundingClientRect();

    const fromRect = fromElem.getBoundingClientRect();
    const toRect = toElem.getBoundingClientRect();

    // Calculate the position of the elements relative to the container
    const startX = fromRect.left - containerRect.left + fromRect.width / 2;
    const startY = fromRect.top - containerRect.top + fromRect.height / 2;
    const endX = toRect.left - containerRect.left + toRect.width / 2;
    const endY = toRect.top - containerRect.top + toRect.height / 2;

    const distance = Math.sqrt(
      Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
    );
    const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

    setLineStyle({
      width: distance + "px",
      transform: `rotate(${angle}deg)`,
      left: startX + "px",
      top: startY + "px",
    });
  };

  createEffect(() => {
    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);
  });

  return <div class="line" style={lineStyle()}></div>;
}
