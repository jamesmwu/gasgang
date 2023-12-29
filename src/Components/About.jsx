import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
	return (
		<div className='about-section-container'>
			<div className='about-background-image-container'>
				<img src={AboutBackground} alt='' />
			</div>
			<div className='about-text-container'>
				<div className='about-section-image-container'>
					<img src={AboutBackgroundImage} alt='' />
				</div>
				<div className='about-section-text-container'>
					<p className='primary-subheading'>Damn</p>
					<h1 className='primary-heading'>We are all going through it</h1>
					<p className='primary-text'>
						"I wish I had cancer so I could get that $20"
					</p>
					<p className='secondary-text'>
						- Mario, after hearing Ben donated $20 to cancer research
					</p>
					<div className='about-buttons-container'>
						<a
							className='secondary-button'
							href='https://www.cancer.org/donate.html#:~:text=You%20can%20make%20your%20gift,send%20your%20donation%20by%20mail.'
							target='_blank'
						>
							The Mario Fund <FiArrowRight />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
