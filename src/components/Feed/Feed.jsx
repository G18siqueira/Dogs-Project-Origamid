import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = () => {
	return (
		<section className={`animeLeft`}>
			<div className={`container`}>
				<FeedModal />
				<FeedPhotos />
			</div>
		</section>
	);
};

export default Feed;
