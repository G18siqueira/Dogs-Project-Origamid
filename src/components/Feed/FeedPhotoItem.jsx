import { AiOutlineEye } from 'react-icons/ai';
import styles from './feedPhotosItem.module.scss';
import Image from '../Ui/Image/Image';

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
	const handleClick = () => {
		setModalPhoto(photo);
	};

	return (
		<li className={styles['feedPhotosItem']} onClick={handleClick}>
			<Image src={photo.src} alt={photo.title} />
			<span className={styles['feedPhotosItem-visualizacao']}>
				<AiOutlineEye />
				{photo.acessos}
			</span>
		</li>
	);
};

export default FeedPhotoItem;
