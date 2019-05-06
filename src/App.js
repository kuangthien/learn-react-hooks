import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma';
import axios from 'axios';
import Loading from './Loading';
import Results from './Results';
import SearchControl from './SearchControl';

const API_URL = 'https://api.github.com/search/users?q=';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const fetchResult = await axios.get(API_URL + inputValue);

				if (fetchResult.data && fetchResult.data.items) {
					setResults(fetchResult.data.items);
				} else {
					setResults([]);
				}
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		};

		inputValue && fetchData();
	}, [inputValue]);

	return (
		<div className='App section'>
			<div className='container' style={{ marginTop: 40 }}>
				<SearchControl
					callbackInputChange={typed => setInputValue(typed)}
					inputValue={inputValue}
				/>
				<Results results={results} />
			</div>
			<Loading show={loading} />
		</div>
	);
}

export default App;
