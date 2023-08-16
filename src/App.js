
import './App.css';
import Counter from './components/Counter.jsx';
import { createContext } from 'react';

export const Context = createContext();

function App() {
  

  const initialState= {counter : 0};

  return (
    <Context.Provider value = {initialState}>
      <div className="App">
        <Counter />
      </div>
    </Context.Provider>
  );
}

export default App;
