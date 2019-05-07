import axios from 'axios';

export const fetchData = async searchKeyword => {
	if (!searchKeyword) return null;
	let results;
	try {
		const fetchResult = await axios.get(API_URL + searchKeyword);

		if (fetchResult.data && fetchResult.data.items) {
			results = fetchResult.data.items;
		} else {
			results = [];
		}
	} catch (err) {
		console.log(err);
		return null;
	}
	return results;
};

const API_URL = 'https://api.github.com/search/users?q=';
