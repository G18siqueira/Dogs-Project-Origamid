import React from 'react';
import styles from './footer.module.scss';
import { ReactComponent as Dogs } from '../../../assets/dogs-footer.svg';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={`container`}>
				<Dogs />
				<p>Dogs, Alguns direitos reservados</p>
			</div>
		</footer>
	);
};

export default Footer;
