import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import FeedPhotoItem from './FeedPhotoItem';
import { PHOTOS_GET } from '../../api';
import Error from '../Ui/Error/Error';
import Loading from '../Ui/Loading/Loading';

import styles from './feedPhotos.module.scss';

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
	const { data, loading, error, request } = useFetch();

	useEffect(() => {
		const fetchPhotos = async () => {
			const total = 6;
			const { url, options } = PHOTOS_GET({ page, total, user });
			const { response, json } = await request(url, options);
			if (response && response.ok && json.length < total) {
				setInfinite(false);
			}
		};
		fetchPhotos();
	}, [request, user, page, setInfinite]);

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	if (data)
		return (
			<div className={`container`}>
				<ul className={`${styles['feedPhotos']} animeLeft`}>
					{data.map((photo) => (
						<FeedPhotoItem
							key={photo.id}
							photo={photo}
							setModalPhoto={setModalPhoto}
						/>
					))}
				</ul>
			</div>
		);
	else return null;
};

export default FeedPhotos;
