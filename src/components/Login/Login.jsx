import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

import styles from './login.module.scss';

const Login = () => {
	const { login } = useContext(UserContext);

	if (login === true) return <Navigate to="/conta" />;

	return (
		<section className={styles['login']}>
			<div className={styles['login-forms']}>
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="criar" element={<LoginCreate />} />
					<Route path="perdeu" element={<LoginPasswordLost />} />
					<Route path="resetar" element={<LoginPasswordReset />} />
				</Routes>
			</div>
		</section>
	);
};

export default Login;
