import { useContext } from 'react';
import { USER_POST } from '../../api';
import useForm from '../../hooks/useForm';
import Button from '../Forms/Button/Button';
import Input from '../Forms/Input/Input';
import styles from './login.module.scss';
import { UserContext } from '../../UserContext';
import useFetch from '../../hooks/useFetch';
import Error from '../Ui/Error/Error';
import Head from '../Ui/Head/Head';
const LoginCreate = () => {
	const username = useForm();
	const email = useForm('email');
	const password = useForm();

	const { userLogin } = useContext(UserContext);
	const { loading, error, request } = useFetch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { url, options } = USER_POST({
			username: username.value,
			email: email.value,
			password: password.value,
		});
		const { response } = await request(url, options);
		if (response.ok) userLogin(username.value, password.value);
	};

	return (
		<>
			<Head title="Crie sua Conta" description="" />
			<section className={`animeLeft`}>
				<h1 className={`title`}>Cadastre-se</h1>
				<form onSubmit={handleSubmit}>
					<Input
						label={'Usuário'}
						type={'text'}
						name={'username'}
						{...username}
					/>
					<Input
						label={'Email'}
						type={'email'}
						name={'email'}
						{...email}
					/>
					<Input
						label={'Senha'}
						type={'password'}
						name={'password'}
						{...password}
					/>
					{loading ? (
						<Button disabled>Cadastrando...</Button>
					) : (
						<Button>Cadastrar</Button>
					)}
					<Error error={error} />
				</form>
			</section>
		</>
	);
};

export default LoginCreate;
