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
					<p className='primary-text'>"Another meal alone"</p>
					<p className='secondary-text'>
						- Phillip, after no one wanted to eat with him
					</p>
					<div className='about-buttons-container'>
						<a
							className='secondary-button'
							href='https://drive.google.com/file/d/1FQSwixwMwNGClnnH8TgNaSJuobWA6DEV/view?usp=sharing'
							target='_blank'
						>
							There are two Wolves <FiArrowRight />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
