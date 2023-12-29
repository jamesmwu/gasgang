import './App.css';
import Musing from './Musing';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Landing from './Landing';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/musing' element={<Musing />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
