import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './feedModal.module.scss';
import { PHOTO_GET } from '../../api';
import Error from '../Ui/Error/Error';
import Loading from '../Ui/Loading/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
	const { data, error, loading, request } = useFetch();

	useEffect(() => {
		const { url, options } = PHOTO_GET(photo.id);
		request(url, options);
	}, [photo, request]);

	const handleOutSideClick = (event) => {
		if (event.target === event.currentTarget) setModalPhoto(null)
			console.log('Target: ', event.target);
		console.log('Current: ', event.currentTarget);
	};
	return (
		<div className={styles['feedModal']} onClick={handleOutSideClick}>
			{error && <Error error={error} />}
			{loading && <Loading />}
			{data && <PhotoContent data={data} />}
		</div>
	);
};

export default FeedModal;
