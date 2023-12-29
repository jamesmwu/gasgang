import React from 'react';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='home-bannerImage-container'>
				<img src={BannerBackground} alt='' />
			</div>
			<div className='home-banner-container'>
				<div className='home-text-section'>
					<h1 className='primary-heading'>
						Some of the weirdest people I've ever met
					</h1>
					<p className='primary-text'>
						It started with a recording of Big Ben's fart. Now, it's a family.
					</p>
					<a
						className='secondary-button'
						href='https://lightroom.adobe.com/shares/5fbf134b81d9453bb61788a90087067d/albums/775670b7abc4484f8170261c4f1f8e5e/assets/feaa8925a3db4a14b354732b538a596e'
						target='_blank'
					>
						Joshua Tree Pictures <FiArrowRight />
					</a>
				</div>
				<div className='home-image-section'>
					<img src={BannerImage} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Home;
