import { FixedSizeList as List } from "react-window";
const Row = ({ index, style }) => <div style={style}>Row {index}</div>;
function App() {
  return (
    <>
      <List height={150} itemCount={1000} itemSize={35} width={500}>
        {Row}
      </List>
    </>
  );
}

export default App;
