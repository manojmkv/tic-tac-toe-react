import './App.css';
import './index';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <div className='gameContainer'>
       <GameBoard/>
      </div>
    </div>
  );
}

export default App;
