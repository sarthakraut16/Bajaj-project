import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  // Import the CSS file

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const res = await axios.post('https://bajaj-project-yazm.onrender.com/bfhl', parsedInput);
      setResponse(res.data);
    } catch (error) {
      alert('Invalid JSON input or API error');
    }
  };

  const renderResponse = () => {
    if (!response) return null;
    const filteredData = selectedFilters.map((filter) => response[filter]);
    return <pre>{JSON.stringify(filteredData, null, 2)}</pre>;
  };

  return (
    <div className="container">
      <h1>MP Campus Drive Challenge</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder='Enter JSON (e.g., {"data": ["A","2","b"]})'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <select multiple onChange={(e) => setSelectedFilters(Array.from(e.target.selectedOptions, (o) => o.value))}>
          <option value="numbers">Numbers</option>
          <option value="alphabets">Alphabets</option>
          <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
        </select>
      </div>
      {renderResponse()}
    </div>
  );
}

export default App;
