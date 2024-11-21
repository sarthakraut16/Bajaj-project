import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseViewer from './components/ResponseViewer';
import './App.css';

function App() {
  const [response, setResponse] = useState(null); // Store API response

  return (
    <div className="App">
      <h1>MP Campus Drive Challenge</h1>
      <InputForm setResponse={setResponse} />
      {response && <ResponseViewer response={response} />}
    </div>
  );
}

export default App;
