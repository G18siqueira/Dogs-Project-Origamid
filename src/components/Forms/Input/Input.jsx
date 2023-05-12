import styles from './input.module.scss';
const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
	return (
		<div className={styles['wrapper']}>
			<label htmlFor={name} className={styles['wrapper-label']}>
				{label}
			</label>
			<input
				id={name}
				className={styles['wrapper-input']}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <p className={styles['wrapper-error']}>{error}</p>}
		</div>
	);
};

export default Input;
