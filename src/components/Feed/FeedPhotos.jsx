import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import FeedPhotoItem from './FeedPhotoItem';
import { PHOTOS_GET } from '../../api';
import Error from '../Ui/Error/Error';
import Loading from '../Ui/Loading/Loading';

import styles from './feedPhotos.module.scss';

const FeedPhotos = () => {
	const { data, loading, error, request } = useFetch();

	useEffect(() => {
		const fetchPhotos = async () => {
			const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
			const { response, json } = await request(url, options);
			console.log(json);
		};
		fetchPhotos();
	}, [request]);

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	if (data)
		return (
			<ul className={`${styles['feedPhotos']} animeLeft`}>
				{data.map((photo) => (
					<FeedPhotoItem key={photo.id} photo={photo} />
				))}
			</ul>
		);
	else return null;
};

export default FeedPhotos;
