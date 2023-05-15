import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import styles from './user.module.scss';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import NotFound from '../Layout/NotFound/NotFound';
import Head from '../Ui/Head/Head';
const User = () => {
	const { data } = useContext(UserContext);
	return (
		<>
			<Head title="Minha Conta" description="" />
			<section className={`${styles['user']}`}>
				<UserHeader />
				<Routes>
					<Route path="/" element={<Feed user={data.id} />} />
					<Route path="postar" element={<UserPhotoPost />} />
					<Route path="estastisticas" element={<UserStats />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</section>
		</>
	);
};

export default User;
