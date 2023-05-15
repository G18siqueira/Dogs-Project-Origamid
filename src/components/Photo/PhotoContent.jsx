import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import PhotoComments from './PhotoComments';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import styles from './photoContent.module.scss';
import Image from '../Ui/Image/Image';

const PhotoContent = ({ data, single }) => {
	const user = useContext(UserContext);
	const { photo, comments } = data;

	return (
		<div
			className={`${styles['photoContent']} ${
				single ? styles['photoContentSingle'] : ''
			}`}
		>
			<div className={styles['img']}>
				<Image src={photo.src} alt={photo.title} />
			</div>
			<div className={styles['details']}>
				<div className={styles['infos']}>
					<p className={styles['infos-author']}>
						{user.data && user.data.username === photo.author ? (
							<PhotoDelete id={photo.id} />
						) : (
							<Link
								className={styles['infos-link']}
								to={`/perfil/${photo.author}`}
							>
								@{photo.author}
							</Link>
						)}

						<span className={styles['infos-visualizations']}>
							<AiOutlineEye />
							{photo.acessos}
						</span>
					</p>
					<h1 className={`title`}>
						<Link to={`/foto/${photo.id}`}>{photo.title}</Link>
					</h1>
					<ul className={styles['infos-attributes']}>
						<li>{photo.peso} kg</li>
						<li>{photo.idade} ano(s)</li>
					</ul>
				</div>
			</div>
			<PhotoComments id={photo.id} comments={comments} single={single} />
		</div>
	);
};

export default PhotoContent;
