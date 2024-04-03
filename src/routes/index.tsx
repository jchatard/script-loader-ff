import { createScriptLoader } from "@solid-primitives/script-loader";
import { Title } from "@solidjs/meta";
import { Show, createSignal } from "solid-js";
import Counter from "~/components/Counter";

export default function Home() {


  const [jqueryLoaded, setJqueryLoaded] = createSignal(false);

  // For example, to use recaptcha:
createScriptLoader({
  src: "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js",
  async onLoad() {
    console.log("jQuery loaded");
    setJqueryLoaded(true);
  },
});

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>

      <Show when={jqueryLoaded()}>
        <p>jQuery is loaded</p>
      </Show>
    </main>
  );
}
