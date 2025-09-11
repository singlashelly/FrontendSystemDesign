import { useState, useEffect } from "react";

function App() {
  const [showAds, SetShowAdds] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetShowAdds(true);
    }, [100]);
  }, []);

  return (
    <div>
      <h1>CLS</h1>
      //Bad way will cause CLS
      {/* {showAds && (
        <div style={{ width: "800px" }}>
          <img src="https://rarjh9ldquohoi50.public.blob.vercel-storage.com/cat-500-qFjiS0w5QlkcWjA6dnyijf9tqqyEuW.jpeg" />
        </div>
      )} */}
      {/* created a place holder space */}
      <div style={{ width: "500px" }}>
        {showAds && (
          <img src="https://rarjh9ldquohoi50.public.blob.vercel-storage.com/cat-500-qFjiS0w5QlkcWjA6dnyijf9tqqyEuW.jpeg" />
        )}
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    </div>
  );
}

export default App;
