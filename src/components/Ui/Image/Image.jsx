import { useState } from 'react';
import styles from './image.module.scss';
const Image = ({ alt, ...props }) => {
	const [skeleton, setSkeleton] = useState(true);

	const handleLoad = ({ target }) => {
        setSkeleton(false)
		target.style.opacity = 1;
	};

	return (
		<div className={styles['image']}>
			{skeleton && <div className={styles['image-skeleton']}></div>}
			<img
				className={styles['image-img']}
				src=""
				alt=""
				onLoad={handleLoad}
				{...props}
			/>
		</div>
	);
};

export default Image;
