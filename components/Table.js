import React from 'react';

const Table = ({ history }) => {
	return (
		<div className='container p-2 mx-auto sm:p-4 text-gray-100'>
			<h2 className='mb-4 text-2xl font-semibold leading-tight text-center'>
				Recent Transactions
			</h2>
			<div className='overflow-x-auto rounded-lg shadow-lg'>
				{' '}
				{/* Added rounded corners and shadow */}
				<table className='min-w-full text-xs md:text-sm bg-gray-800'>
					{' '}
					{/* Darker background */}
					<colgroup>
						<col />
						<col />
						<col />
						<col />
						<col />
						<col className='w-24' />
					</colgroup>
					<thead className='bg-gray-900 text-gray-400'>
						{' '}
						{/* Darker header */}
						<tr>
							<th className='py-3 px-6 text-left uppercase tracking-wider'>
								ID
							</th>
							<th className='py-3 px-6 text-left uppercase tracking-wider'>
								User
							</th>
							<th className='py-3 px-6 text-left uppercase tracking-wider'>
								From
							</th>
							<th className='py-3 px-6 text-left uppercase tracking-wider'>
								To
							</th>
							<th className='py-3 px-6 text-left uppercase tracking-wider'>
								Input
							</th>
							<th className='py-3 px-6 text-left uppercase tracking-wider'>
								Output
							</th>
							<th className='py-3 px-6 text-left uppercase tracking-wider'>
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{history && history.length > 0 ? (
							history.map((history, i) => (
								<React.Fragment key={i + 1}>
									<tr className='border-b border-gray-700 hover:bg-gray-700'>
										{' '}
										{/* Added hover effect */}
										<td className='py-4 px-6'>{history.historyId}</td>
										<td className='py-4 px-6'>{history.userAddress}</td>
										<td className='py-4 px-6'>{history.tokenB}</td>
										<td className='py-4 px-6'>{history.tokenA}</td>
										<td className='py-4 px-6'>{history.inputValue}</td>
										<td className='py-4 px-6'>{history.outputValue}</td>
										<td className='py-4 px-6'>
											<span className='px-3 py-1 text-sm font-semibold text-green-100 bg-green-600 rounded-full'>
												Completed
											</span>
										</td>
									</tr>
								</React.Fragment>
							))
						) : (
							<tr>
								<td
									colSpan='7'
									className='py-4 px-6 text-center'>
									No transactions found
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
