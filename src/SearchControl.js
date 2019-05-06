import React from 'react';

const SearchControl = props => {
	const { callbackInputChange: handleInputChange, inputValue } = props;
	return (
		<div className='field'>
			<div className='control'>
				<input
					className='input is-large'
					type='text'
					placeholder='Large input'
					value={inputValue}
					onChange={e => handleInputChange(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default SearchControl;
