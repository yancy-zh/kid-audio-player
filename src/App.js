import logo from "./logo.svg";
import "./App.css";
import AudioGroup from "./components/AudioGroup";

const data = [
  { id: 1, label: "数字一到十" },
  { id: 2, label: "家庭成员称呼" },
  { id: 3, label: "各种颜色名称" },
  { id: 4, label: "十二个月名称" },
  { id: 5, label: "家养小动物名称" },
  { id: 6, label: "水果食物名称" },
  { id: 7, label: "一周星期名称" },
  { id: 8, label: "动物园动物名称" },
  { id: 9, label: "人体五官名称" },
  { id: 10, label: "各种职业名称" },
  { id: 11, label: "春夏秋冬四季" },
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Kid's Audio Player</h3>
      </header>
      <body className="App-body">
        {/* a list of tracks */}
        <AudioGroup data={data}></AudioGroup>
      </body>
      <footer className="App-footer">Copyright Version-Nr: 0.1</footer>
    </div>
  );
}

export default App;
