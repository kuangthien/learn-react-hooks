import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma';
import axios from 'axios';
import Loading from './Loading';
const ResultItem = props => {
	const { avatar_url, login, type, score } = props;
	return (
		<tr>
			<td style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
				<img
					src={avatar_url}
					alt=''
					style={{
						height: 30,
						width: 'auto',
						verticalAlign: 'middle',
						marginRight: '.5em',
					}}
				/>
				<strong
					className='is-medium'
					style={{ verticalAlign: 'middle' }}
				>
					{login}
				</strong>
			</td>

			<td>{type}</td>

			<td>{score}</td>
		</tr>
	);
};
export default ResultItem;