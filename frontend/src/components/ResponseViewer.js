import React, { useState } from 'react';

function ResponseViewer({ response }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedFilters(options);
  };

  const renderFilteredResponse = () => {
    if (!selectedFilters.length) return response;
    return selectedFilters.reduce((filtered, filter) => {
      filtered[filter] = response[filter];
      return filtered;
    }, {});
  };

  return (
    <div>
      <h2>Response</h2>
      <div>
        <label>Filter Response:</label>
        <select multiple onChange={handleFilterChange}>
          <option value="numbers">Numbers</option>
          <option value="alphabets">Alphabets</option>
          <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
        </select>
      </div>
      <pre>{JSON.stringify(renderFilteredResponse(), null, 2)}</pre>
    </div>
  );
}

export default ResponseViewer;
