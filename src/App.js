
import React from 'react';
import { Random } from './components/Random';
import { Button } from './components/Button';

 class App extends React.Component{
   render () {
  return (
    <div className="App">
    < Random />
    <Button />
    </div>
  )
  }
}

export default App;