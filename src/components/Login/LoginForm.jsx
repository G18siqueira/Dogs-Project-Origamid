import { Link } from 'react-router-dom';
import styles from './login.module.scss';
import { useEffect, useState } from 'react';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';
const LoginForm = () => {
	const username = useForm();
	const password = useForm();

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		if (token) {
			getUser(token);
		}
		getUser();
	}, []);

	const getUser = async (token) => {
		const { url, options } = USER_GET(token);
		try {
			const response = await fetch(url, options);
			const json = await response.json();
			console.log(json);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			const { url, options } = TOKEN_POST({
				username: username.value,
				password: password.value,
			});
			try {
				const response = await fetch(url, options);
				const json = await response.json();
				console.log(json);
				window.localStorage.setItem('token', json.token);
				getUser(json.token);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<section>
			<h1>Login</h1>

			<form action="" onSubmit={handleSubmit}>
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
				<Button>Entrar</Button>
			</form>
			<Link to={'/login/criar'}>Cadastro</Link>
		</section>
	);
};

export default LoginForm;
