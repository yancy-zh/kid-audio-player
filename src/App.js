import logo from "./hellokitty.svg";
import "./App.css";
import PlayerBody from "./components/PlayerBody";

const data = [
  { id: 1, name: "数字一到十" },
  { id: 2, name: "家庭成员称呼" },
  { id: 3, name: "各种颜色名称" },
  { id: 4, name: "十二个月名称" },
  { id: 5, name: "家养小动物名称" },
  { id: 6, name: "水果食物名称" },
  { id: 7, name: "一周星期名称" },
  { id: 8, name: "动物园动物名称" },
  { id: 9, name: "人体五官名称" },
  { id: 10, name: "各种职业名称" },
  { id: 11, name: "春夏秋冬四季" },
  { id: 12, name: "公园景物名称" },
  { id: 13, name: "服装鞋帽" },
  { id: 14, name: "天文地理名称" },
  { id: 15, name: "文具用品名称" },
  { id: 16, name: "礼貌问候语" },
  { id: 17, name: "交通工具名称" },
];
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
