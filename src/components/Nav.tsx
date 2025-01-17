import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <nav class="bg-sky-800">
      <ul class="container flex items-center p-3 text-gray-200">
        <li class="border-b-2 border-transparent hover:border-white mx-1.5 sm:mx-6">
          <a href="/">Home</a>
        </li>
        <li class="border-b-2 border-transparent hover:border-white mx-1.5 sm:mx-6">
          <a
            href="https://github.com/tri2820/qchess"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li class="border-b-2 border-transparent hover:border-white mx-1.5 sm:mx-6">
          <a href="/howto">How To Play</a>
        </li>
      </ul>
    </nav>
  );
}
