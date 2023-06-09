import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

import styles from './login.module.scss';
import NotFound from '../Layout/NotFound/NotFound';
import Head from '../Ui/Head/Head';

const Login = () => {
	const { login } = useContext(UserContext);

	if (login === true) return <Navigate to="/conta" />;

	return (
		<>
			<Head title="Login" description="" />
			<section className={styles['login']}>
				<div className={styles['login-forms']}>
					<Routes>
						<Route path="/" element={<LoginForm />} />
						<Route path="criar" element={<LoginCreate />} />
						<Route path="perdeu" element={<LoginPasswordLost />} />
						<Route
							path="resetar"
							element={<LoginPasswordReset />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</section>
		</>
	);
};

export default Login;
