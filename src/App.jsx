import  D3Chart from './D3Chart';
import React from 'react';
import GraphNetwork from './GraphNetwork';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <div style={{backgroundColor:"white",width:"100vw",height:"100vh"}}>
      <h1>D3.js Chart</h1>
      <D3Chart />
      <i className="fas fa-home"></i>

      <GraphNetwork/>
    </div>
  );
}

export default App;
