import { AiOutlineEye } from 'react-icons/ai';
import styles from './feedPhotosItem.module.scss';

const FeedPhotoItem = ({ photo }) => {
	return (
		<li className={styles['feedPhotosItem']}>
			<img src={photo.src} alt={photo.title} />
			<span className={styles['feedPhotosItem-visualizacao']}>
				<AiOutlineEye />
				{photo.acessos}
			</span>
		</li>
	);
};

export default FeedPhotoItem;
