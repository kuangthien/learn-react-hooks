import React from 'react';
import ResultItem from './ResultItem';

const Results = props => {
	const { results, keyword, refreshing } = props;

	return (
		keyword && (
			<div className='content'>
				<h2 className='has-text-left ' style={{ marginTop: 20 }}>
					Results for keyword "<i>{keyword}</i>"
					{refreshing && <span className='loader' />}
				</h2>
				{results && results.length > 0 && (
					<table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
						<thead>
							<tr>
								<th>User</th>
								<th>Type</th>
								<th>Score</th>
							</tr>
						</thead>
						<tbody>
							{results.map(result => {
								return (
									<ResultItem {...result} key={result.id} />
								);
							})}
						</tbody>
					</table>
				)}{' '}
			</div>
		)
	);
};

export default Results;
