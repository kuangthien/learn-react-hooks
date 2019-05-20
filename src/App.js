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
	const mergeUnion = arr => {
		const sortedArr = arr.sort((a, b) => a.startPx - b.startPx);
		const arrStart = [];
		const arrEnd = [];

		for (let i = 0; i < sortedArr.length - 1; i++) {
			if (sortedArr[i].endPx >= sortedArr[i + 1].startPx) {
				sortedArr[i].endPx = null;
				sortedArr[i + 1].startPx = null;
			}
		}

		console.log(sortedArr);

		for (let i = 0; i < sortedArr.length; i++) {
			if (sortedArr[i].startPx !== null)
				arrStart.push(sortedArr[i].startPx);
			if (sortedArr[i].endPx !== null) arrEnd.push(sortedArr[i].endPx);
		}

		const resultArr = [];
		arrStart.map((v, i) => {
			resultArr.push({
				startPx: v,
				endPx: arrEnd[i],
			});
		});
		return resultArr;
	};

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
			<div style={{ textAlign: 'left' }}>
				<table border='1'>
					<tbody>
						<tr>
							<td>
								<pre>
									{JSON.stringify(unavailableItems, null, 2)}
								</pre>
							</td>
							<td>
								<pre>
									{JSON.stringify(
										mergeUnion(unavailableItems),
										null,
										2,
									)}
								</pre>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
