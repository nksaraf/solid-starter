import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';

function App() {
  let [count, setCount] = createSignal(0);
  function increment() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      Hello World {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

render(() => <App />, document.getElementById('app')!);
