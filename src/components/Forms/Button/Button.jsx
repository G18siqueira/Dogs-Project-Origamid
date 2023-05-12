import styles from './button.module.scss';
const Button = ({ children, ...rest }) => {
	return (
		<button className={styles['button']} {...rest}>
			{children}
		</button>
	);
};

export default Button;
