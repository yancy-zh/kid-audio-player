import logo from "./hellokitty.svg";
import "./App.css";
import PlayerBody from "./components/PlayerBody";
// obtain a list of filenames within a "public" folder
const audioContext = require.context("/public/audios", false, /\.m4a$/);
const audioNames = audioContext.keys().map((key) => key.replace("./", ""));
// read audio names to data
const data = [];
audioNames.map((item, index) => {
  let arr = item.split("-");
  let i = arr[0].trim();
  let name = arr[1].trim();
  data.push({ id: parseInt(i), name: name.substring(0, name.length - 4) });
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>宝宝音频播放器</h3>
      </header>
      <div className="App-body">
        {/* a list of tracks */}
        <PlayerBody data={data}></PlayerBody>
      </div>
      <footer className="App-footer">Copyright Version-Nr: 0.1</footer>
    </div>
  );
}

export default App;
