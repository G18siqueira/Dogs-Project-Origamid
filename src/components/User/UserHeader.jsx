import { useEffect, useState } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './userHeader.module.scss';
import { useLocation } from 'react-router-dom';
const UserHeader = () => {
	const [title, setTitle] = useState('');
	const location = useLocation();

	useEffect(() => {
		const { pathname } = location;
		switch (pathname) {
			case '/conta/estastisticas':
				setTitle('Estastisticas');
				break;
			case '/conta/postar':
				setTitle('Poste sua Foto');
				break;
			default:
				setTitle('Minha Conta');
		}
	}, [location]);

	return (
		<header className={`${styles['userHeader']}`}>
			<div className={`container`}>
				<div className={`${styles['userHeader-content']}`}>
					<h1 className={`title animeLeft`}>{title}</h1>
					<UserHeaderNav />
				</div>
			</div>
		</header>
	);
};

export default UserHeader;
