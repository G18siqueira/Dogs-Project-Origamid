import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { MdPhotoCamera } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';

import Button from '../Forms/Button/Button';
import styles from './userHeaderNav.module.scss';

const UserHeaderNav = () => {
	const [mobile, setMobile] = useState(null);
	const { userLogout } = useContext(UserContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		userLogout();
		navigate('/login');
	};

	return (
		<nav className={`${styles['userNav']} animeRight`}>
			<NavLink to={'/conta'} end>
				<MdPhotoCamera />
				{mobile && <span>Minhas Fotos</span>}
			</NavLink>
			<NavLink to={'/conta/estastisticas'}>
				<GoGraph />
				{mobile && <span>Estastísticas</span>}
			</NavLink>
			<NavLink to={'/conta/postar'}>
				<AiOutlinePlus />
				{mobile && <span>Adicionar Foto</span>}
			</NavLink>
			<button onClick={userLogout}>
				<GrLogout />
				{mobile && <span>Sair</span>}
			</button>
		</nav>
	);
};

export default UserHeaderNav;
