import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div data-testid={'errorMsg'}
           className={'hide'}
           style={{visibility: 'hidden'}}>
        error
      </div>
    </div>
  );
}

export default App;
