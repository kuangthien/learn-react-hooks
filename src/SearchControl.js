import React from 'react';
import _ from 'lodash';

const SearchControl = props => {
	const { callbackInputChange: handleInputChange } = props;

 
	const handleChange = _.debounce(function(latestTyped) {
		handleInputChange(latestTyped);
	}, 1200);

	return (
		<div className='field'>
			<div className='control'>
				<input
 					className='input is-large'
					type='text'
					placeholder='Type keyword to search'
					onChange={e => handleChange(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default SearchControl;
