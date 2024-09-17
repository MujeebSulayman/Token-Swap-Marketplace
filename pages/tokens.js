import { useEffect, useState } from 'react';

import { Footer, Header, Table } from '../components/index';
import { getAllHistory } from '../utils/context';

const tokens = () => {
	const [history, setHistory] = useState([]);
	const loadData = async () => {
		const data = await getAllHistory();
		setHistory(data.reverse());
	};

	useEffect(() => {
		loadData();
	}, []);

	console.log(history);
	return (
		<>
			<Header />
			<Table history={history} />
			<Footer />
		</>
	);
};

export default tokens;
