import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const response = await axios.post('http://localhost:5000/api/problems/search', { query });
        setResults(response.data);
    };

    return (
        <div className="App">
            <h1>DSA Problem Search Engine</h1>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Enter your search query" 
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        <h3>{result.problem.title}</h3>
                        <p>{result.problem.description}</p>
                        <p>Relevance Score: {result.score.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
    