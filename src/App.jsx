import React from 'react'
import './App.css'
import BackwardCounter from './components/BackwardCounter'
import ForwardCounter from './components/ForwardCounter'

function App() {


  return (
    <div className="App">

      <React.Fragment>
        <ForwardCounter/>
        <BackwardCounter/>
      </React.Fragment>

    </div>
  )
}

export default App
