import { useEffect, useState } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import styles from './userStatsGraphs.module.scss';

const UserStatsGraphs = ({ data }) => {
	const [graph, setGraph] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const graphData = data.map((item) => {
			return {
				x: item.title,
				y: Number(item.acessos),
			};
		});
		setTotal(
			data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
		);
		setGraph(graphData);
	}, [data]);

	return (
		<section className={`${styles['graph']} animeLeft`}>
			<div className={`container`}>
				<div className={styles['graph-content']}>
					<div
						className={`${styles['graph-total']} ${styles['graph-item']}`}
					>
						<p>Acessos: {total}</p>
					</div>
					<div className={styles['graph-item']}>
						<VictoryPie
							data={graph}
							innerRadius={50}
							padding={{
								top: 20,
								bottom: 20,
								left: 80,
								right: 80,
							}}
							style={{
								data: {
									fillOpacity: 0.9,
									stroke: '#fff',
									strokeWidth: 2,
								},
								labels: {
									fontSize: 14,
									fill: '#333',
								},
							}}
						/>
					</div>
					<div className={styles['graph-item']}>
						<VictoryChart>
							<VictoryBar
								alignment="start"
								data={graph}
							></VictoryBar>
						</VictoryChart>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserStatsGraphs;
