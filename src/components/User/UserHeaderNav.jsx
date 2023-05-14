import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext';
import { MdPhotoCamera } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrLogout } from 'react-icons/gr';

import styles from './userHeaderNav.module.scss';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
	const mobile = useMedia('(max-width: 992px)');
	const [mobileMenu, setMobileMenu] = useState(false);
	const { userLogout } = useContext(UserContext);
	const navigate = useNavigate();

	const { pathname } = useLocation();

	useEffect(() => {
		setMobileMenu(false);
	}, [pathname]);

	const handleLogout = () => {
		userLogout();
		navigate('/login');
	};

	return (
		<>
			{mobile && (
				<button
					className={`${styles['userNav-mobileButton']} ${
						mobileMenu && styles['userNav-mobileButton_active']
					}`}
					aria-label="Menu"
					onClick={() => setMobileMenu(!mobileMenu)}
				></button>
			)}

			<nav
				className={`${
					mobile ? styles['userNav-navMobile'] : styles['userNav']
				} ${mobileMenu && styles['userNav-navMobile_active']}`}
			>
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
				<button onClick={handleLogout}>
					<GrLogout />
					{mobile && <span>Sair</span>}
				</button>
			</nav>
		</>
	);
};

export default UserHeaderNav;
