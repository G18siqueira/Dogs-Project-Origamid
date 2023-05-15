import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';
import styles from './photoDelete.module.scss';
const PhotoDelete = ({ id }) => {
	const { loading, request } = useFetch();

	const handleClick = async () => {
		const confirm = window.confirm('Tem certeza que deseja deletar?');
		if (confirm) {
			const { url, options } = PHOTO_DELETE(id);
			const { response } = await request(url, options);
			if (response.ok) window.location.reload();
		}
	};
	return (
		<>
			{loading ? (
				<button className={styles['photoDelete']} disabled>
					Deletar
				</button>
			) : (
				<button className={styles['photoDelete']} onClick={handleClick}>
					Deletar
				</button>
			)}
		</>
	);
};

export default PhotoDelete;
