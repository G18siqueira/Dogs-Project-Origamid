import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import styles from './userProfile.module.scss';
import Head from '../Ui/Head/Head';

const UserProfile = () => {
	const { user } = useParams();
	return (
		<>
			<Head title={user} description="" />
			<section className={``}>
				<div className={`container`}>
					<h1 className={`title`}>{user}</h1>
					<Feed user={user} />
				</div>
			</section>
		</>
	);
};

export default UserProfile;
