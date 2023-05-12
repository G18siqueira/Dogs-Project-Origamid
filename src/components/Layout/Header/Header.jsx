import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../../assets/dogs.svg';
import { AiOutlineUser } from 'react-icons/ai';
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';

const Header = () => {
	const { data, userLogout } = useContext(UserContext);
	console.log(data);

	return (
		<header className={styles['header']}>
			<div className={`container ${styles['header-container']}`}>
				<nav className={styles['header-nav']}>
					<Link
						to={'/'}
						className={styles['header-logo']}
						aria-label="Dogs - Home"
					>
						<Dogs />
					</Link>

					{data ? (
						<Link className={styles['header-login']} to={'/conta'}>
							{data.nome}
							<AiOutlineUser />
						</Link>
					) : (
						<Link className={styles['header-login']} to={'/login'}>
							Login / Criar
							<AiOutlineUser />
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
