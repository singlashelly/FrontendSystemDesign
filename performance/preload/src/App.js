import React, { useState } from "react";

const App = () => {
  const [showEmoji, toggleEmoji] = useState(false);
  const [emojiElem, setEmojiPickerE1] = useState();
  const handleClick = () => {
    import(/* webpackChunkName:"emoji" */ "./Emoji")
      .then((module) => module.default)
      .then((emojiPicker) => {
        setEmojiPickerE1(emojiPicker);
        toggleEmoji(!showEmoji);
      });
  };
  return (
    <div>
      <h1>webpack preload</h1>
      <button onClick={handleClick}>Show emoji</button>
      {showEmoji && emojiElem}
    </div>
  );
};

export default App;
