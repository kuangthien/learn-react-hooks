import React, { useState } from 'react';
import './App.css';
import 'bulma';
import Results from './Results';
import SearchControl from './SearchControl';
import { fetchData } from './ApiService';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleFetching = async searchKeyword => {
		if (!searchKeyword) {
			// Once the search is performed, clearing the input should also clear the list of users displayedbefore.
			setInputValue('');
		} else if (isKeywordValidated(searchKeyword)) {
			setInputValue(searchKeyword);
			// When an active HTTP request is in progress, place a progress indicator anywhere on thepage to indicate network activity.
			setLoading(true);
			const results = await fetchData(searchKeyword);
			results && setResults(results);
			setLoading(false);
		}
	};

	const isKeywordValidated = searchKeyword => {
		// When a user enters at least 3 characters into the text field, make an API request to thegithub endpoint, parse the resulting JSON and display the following three pieces of data forthe first hundred user items.­
		return searchKeyword && searchKeyword.length >= 3;
	};

	let unavailableItems = [
		{ startPx: 10, endPx: 30 },
		{ startPx: 55, endPx: 65 },
		{ startPx: 35, endPx: 50 },
		{ startPx: 20, endPx: 40 },
		{ startPx: 60, endPx: 70 },
	];

	return (
		<div className='App section'>
			<div className='container' style={{ marginTop: 40 }}>
				<SearchControl
					callbackInputChange={typed => handleFetching(typed)}
					shouldLockTyping={loading}
				/>
				<Results
					results={results}
					keyword={isKeywordValidated(inputValue) && inputValue}
					refreshing={loading}
				/>
			</div>
			<hr style={{ marginTop: 50 }} />
			<h3>Some other fun things (WIP):</h3>
			{JSON.stringify(unavailableItems)}
		</div>
	);
}

export default App;
