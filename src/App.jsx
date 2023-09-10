import React from 'react';
import NewGraph from './NewGraph';
import '@fortawesome/fontawesome-free/css/all.css';
function App() {
  return (
    <div style={{backgroundColor:"white",width:"100vw",height:"100vh"}}>
      <h1>D3.js Chart</h1>
      <NewGraph/>
     
    </div>
  );
}

export default App;
