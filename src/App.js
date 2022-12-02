import "./App.css";
import SideBar from "./components/SideBar/index";
import Dashboard from "./components/Dashboard/index";
import Calendar from "./components/Calendar/index";

function App() {
  return (
    <div className="flex h-[calc(100vh-32px)]">
      <SideBar />
      <Dashboard />
      <Calendar />
    </div>
  );
}

export default App;
