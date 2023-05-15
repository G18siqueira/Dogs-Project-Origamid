import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../hooks/useForm';
import Error from '../Ui/Error/Error';

import styles from './loginForm.module.scss';
import stylesBtn from '../Forms/Button/button.module.scss';
import Head from '../Ui/Head/Head';

const LoginForm = () => {
	const username = useForm();
	const password = useForm();

	const { userLogin, error, loading } = useContext(UserContext);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value);
		}
	};

	return (
		<>
			<Head title="Login" description="" />
			<section className={`${styles['loginForm']} animeLeft`}>
				<h1 className={`title`}>Login</h1>

				<form
					className={styles['loginForm-form']}
					onSubmit={handleSubmit}
				>
					<Input
						label={'Usuario'}
						type={'text'}
						name={'username'}
						{...username}
					/>
					<Input
						label={'Senha'}
						type={'password'}
						name={'password'}
						{...password}
					/>
					{loading ? (
						<Button disabled>Carregando...</Button>
					) : (
						<Button>Entrar</Button>
					)}
					<Error error={error && 'Dados incorretos'} />
				</form>
				<Link
					className={styles['loginForm-btnPerdeu']}
					to={'/login/perdeu'}
				>
					Perdeu a Senha?
				</Link>
				<div className={styles['loginForm-cadastro']}>
					<h2>Cadastre-se</h2>
					<p>Ainda não possui conta? Cadastre-se no site.</p>
					<Link className={stylesBtn['button']} to={'/login/criar'}>
						Cadastro
					</Link>
				</div>
			</section>
		</>
	);
};

export default LoginForm;
