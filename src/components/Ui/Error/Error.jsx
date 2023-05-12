import styles from './error.module.scss';

const Error = ({ error }) => {
	if (!error) return null;
	return <p className={styles['error']}>{error}</p>;
};

export default Error;
