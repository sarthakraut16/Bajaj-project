import React, { useState } from 'react';
import axios from 'axios';

function InputForm({ setResponse }) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setError(null);
      const parsedInput = JSON.parse(jsonInput); // Validate JSON
      const res = await axios.post('http://localhost:5000/bfhl', parsedInput); // Adjust URL if backend is hosted
      setResponse(res.data); // Pass response to parent
    } catch (err) {
      setError('Invalid JSON input or API error');
    }
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        placeholder='Enter JSON (e.g., {"data": ["A", "2", "b"]})'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default InputForm;
