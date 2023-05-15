import styles from './notFound.module.scss';

const NotFound = () => {
	return (
		<section className={styles['notFund']}>
			<div className={`container`}>
				<h1 className={`title`}>Erro: 404</h1>
				<p>Página não encontrada</p>
			</div>
		</section>
	);
};

export default NotFound;
