
import './App.css';

import TicTacToe from './Components/TicTacToe/TicTacToe';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <TicTacToe></TicTacToe>
 
      
      <Toaster />
    </>
  );
}

export default App;
