import { Suspense, lazy, useEffect } from 'react';
import { STATS_GET } from '../../api';
import Head from '../Ui/Head/Head';
import useFetch from '../../hooks/useFetch';
import Loading from '../Ui/Loading/Loading';
import Error from '../Ui/Error/Error';
const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
	const { data, error, loading, request } = useFetch();

	useEffect(() => {
		const getData = async () => {
			const { url, options } = STATS_GET();
			await request(url, options);
		};
		getData();
	}, [request]);

	if (loading) return <Loading />;
	if (error) return <Error error={error} />;
	if (data)
		return (
			<>
				<Head title="Estatísticas" description="" />
				<Suspense fallback={<div></div>}>
					<UserStatsGraphs data={data} />
				</Suspense>
			</>
		);
	else return null;
};

export default UserStats;
