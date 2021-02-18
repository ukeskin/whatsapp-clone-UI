import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat/index.js';
function App() {
  return (
    <div className="App">
      <div className="App__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
