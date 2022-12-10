import './App.css';
import RandomNum from './RandomNum';

function App() {
  return (
    <div className="App">
      <h1>Random Num</h1>
      <RandomNum maxNum={10}/>
    </div>
  );
}

export default App;
