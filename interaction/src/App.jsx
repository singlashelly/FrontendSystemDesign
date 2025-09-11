import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <h1>Heading</h1>
      <button onClick={handleClick}>Open modal</button>
      {showModal && <div>I am modal</div>}
    </>
  );
}

export default App;
