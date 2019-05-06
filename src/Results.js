import React from 'react';
import ResultItem from './ResultItem';

const Results = props => {
	const { results } = props;

	return (
		results &&
		results.length > 0 && (
			<div>
				<div className='content'>
					<h2 className=' ' style={{ marginTop: 20 }}>
						Results
					</h2>
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
				</div>
			</div>
		)
	);
};

export default Results;
