import Feed from '../../Feed/Feed';
import Head from '../../Ui/Head/Head';
import Loading from '../../Ui/Loading/Loading';

const Home = () => {
	return (
		<>
			<Head
				title="Fotos"
				description="Home do site Dogs, com o feed de fotos"
			/>
			<section>
				<Feed />
			</section>
		</>
	);
};

export default Home;
