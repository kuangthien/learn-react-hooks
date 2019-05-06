import React, { Component } from 'react';

class Loading extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { show } = this.props;
		return (
			show && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'rgba(0,0,0,.5)',
						zIndex: 10000,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<style>
						{`
                        .loader {
                            border: 16px solid #f3f3f3;
                            border-radius: 50%;
                            border-top: 16px solid #4261ff;
                            width: 100px;
                            height: 100px;
                             animation: spin 1s linear infinite;                            
                        }

                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}
					</style>
					<span
						className='  loader'
						style={{
							color: '#fff',
						}}
					/>
				</div>
			)
		);
	}
}

export default Loading;
