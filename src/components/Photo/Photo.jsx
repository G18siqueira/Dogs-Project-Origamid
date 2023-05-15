import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Ui/Error/Error';
import Loading from '../Ui/Loading/Loading';
import PhotoContent from '../Photo/PhotoContent';
import Head from '../Ui/Head/Head';

const Photo = () => {
	const { id } = useParams();
	const { data, loading, error, request } = useFetch();

	useEffect(() => {
		const { url, options } = PHOTO_GET(id);
		request(url, options);
	}, [request, id]);

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	if (data)
		return (
			<>
				<Head title={data.photo.title} description="" />
				<section>
					<div className={`container`}>
						<PhotoContent data={data} single={true} />
					</div>
				</section>
			</>
		);
	else return null;
};

export default Photo;
