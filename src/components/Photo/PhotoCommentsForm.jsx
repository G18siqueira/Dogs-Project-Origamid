import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import useFetch from '../../hooks/useFetch';
import Error from '../Ui/Error/Error';
import { COMMENT_POST } from '../../api';

import styles from './photoCommentsForm.module.scss';

const PhotoCommentsForm = ({ id, setComments, single }) => {
	const [comment, setComment] = useState('');
	const { request, error } = useFetch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { url, options } = COMMENT_POST(id, { comment });
		const { response, json } = await request(url, options);
		if (response.ok) {
			setComment('');
			setComments((comments) => [...comments, json]);
		}
	};

	return (
		<form
			className={`${styles['photoCommentsForm']} ${
				single ? styles['photoCommentsFormSingle'] : ''
			}`}
			onSubmit={handleSubmit}
		>
			<textarea
				className={styles['photoCommentsForm-textarea']}
				id="comment"
				name="comment"
				placeholder="Comente..."
				value={comment}
				onChange={({ target }) => setComment(target.value)}
			/>
			<button className={styles['photoCommentsForm-button']}>
				<AiOutlineSend />
			</button>
			<Error error={error} />
		</form>
	);
};

export default PhotoCommentsForm;
