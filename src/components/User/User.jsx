import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import styles from './user.module.scss';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
const User = () => {
	return (
		<section className={`${styles['user']}`}>
			<div className={`container`}>
				<UserHeader />
				<Routes>
					<Route path="/" element={<Feed />} />
					<Route path="postar" element={<UserPhotoPost />} />
					<Route path="estastisticas" element={<UserStats />} />
				</Routes>
			</div>
		</section>
	);
};

export default User;
