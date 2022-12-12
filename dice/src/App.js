import './App.css';
import Die from './Die';

function App() {
  return (
    <div className="App">
      <Die face={Math.floor(Math.random() * 6 )}/>
    </div>
  );
}

export default App;
