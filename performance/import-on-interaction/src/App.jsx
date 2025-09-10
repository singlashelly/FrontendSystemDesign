import { useState, lazy, Suspense } from "react";
import Message from "./Message";
// import Emoji from "./Emoji";
const Emoji = lazy(() => import("./Emoji"));

function App() {
  const [showEmoji, toggleEmoji] = useState(false);
  return (
    <>
      <Message />
      <button onClick={() => toggleEmoji((prev) => !prev)}>Show Emoji</button>
      {showEmoji && (
        <Suspense fallback={<>...</>}>
          {" "}
          <Emoji />
        </Suspense>
      )}
    </>
  );
}

export default App;
