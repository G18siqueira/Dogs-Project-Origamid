import { useEffect } from 'react';
import './App.scss';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Layout/Home/Home';
import Login from './components/Login/Login';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './UserContext';
import User from './components/User/User';
import ProtectedRouter from './components/Ui/ProtectedRouter/ProtectedRouter';

const App = () => {
	useEffect(() => {
		Aos.init({ duration: 500 });
	}, []);

	return (
		<div>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="login/*" element={<Login />} />
						<Route
							path="conta/*"
							element={
								<ProtectedRouter>
									<User />
								</ProtectedRouter>
							}
						/>
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	);
};

export default App;
