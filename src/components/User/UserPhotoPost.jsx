import { useEffect, useState } from 'react';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import Error from '../Ui/Error/Error';

import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

import styles from './userPhotoPost.module.scss';
import Head from '../Ui/Head/Head';

const UserPhotoPost = () => {
	const nome = useForm();
	const peso = useForm('number');
	const idade = useForm('number');
	const [img, setImg] = useState({});
	const { data, error, loading, request } = useFetch();
	const navigate = useNavigate();

	useEffect(() => {
		if (data) navigate('/conta');
	}, [data, navigate]);

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('img', img.raw);
		formData.append('nome', nome.value);
		formData.append('peso', peso.value);
		formData.append('idade', idade.value);

		const token = window.localStorage.getItem('token');
		const { url, options } = PHOTO_POST(formData, token);
		request(url, options);
	};

	const handleImgChange = ({ target }) => {
		setImg({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0],
		});
	};
	return (
		<>
			<Head title="Poste sua foto" description="" />
			<section className={`${styles['photoPost']}animeLeft`}>
				<div className={`container`}>
					<div className={styles['photoPost-content']}>
						<form onSubmit={handleSubmit}>
							<Input
								label={'Nome'}
								type={'text'}
								name={'nome'}
								{...nome}
							/>
							<Input
								label={'Peso'}
								type={'number'}
								name={'peso'}
								{...peso}
							/>
							<Input
								label={'Idade'}
								type={'number'}
								name={'idade'}
								{...idade}
							/>
							<input
								type="file"
								name="img"
								className={styles['photoPost-inputFile']}
								id="img"
								onChange={handleImgChange}
							/>
							{loading ? (
								<Button disabled>Enviando...</Button>
							) : (
								<Button>Enviar</Button>
							)}
							<Error error={error} />
						</form>
						<div className={styles['photoPost-preview']}>
							{img.preview && (
								<div
									className={styles['image']}
									style={{
										backgroundImage: `url('${img.preview}')`,
									}}
								></div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UserPhotoPost;
