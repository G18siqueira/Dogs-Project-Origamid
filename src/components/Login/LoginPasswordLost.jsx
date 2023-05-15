import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Button from '../Forms/Button/Button';
import Input from '../Forms/Input/Input';
import styles from './login.module.scss';
import { PASSWORD_LOST } from '../../api';
import Error from '../Ui/Error/Error';
import Head from '../Ui/Head/Head';
const LoginPasswordLost = () => {
	const login = useForm();
	const { data, loading, error, request } = useFetch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (login.validate()) {
			const { url, options } = PASSWORD_LOST({
				login: login.value,
				url: window.location.href.replace('perdeu', 'resetar'),
			});
			const { json } = await request(url, options);
		}
	};
	return (
		<>
			<Head title="Perdeu a Senha?" description="" />
			<section className={`animeLeft`}>
				<h1 className={`title`}>Perdeu a senha?</h1>
				{data ? (
					<p>{data}</p>
				) : (
					<form onSubmit={handleSubmit}>
						<Input
							label={'Email / Usuário'}
							type={'text'}
							name={'login'}
							{...login}
						/>

						{loading ? (
							<Button disabled>Enviando...</Button>
						) : (
							<Button>Enviar Email</Button>
						)}
					</form>
				)}

				<Error error={error} />
			</section>
		</>
	);
};

export default LoginPasswordLost;
