import React from 'react';
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
	return (
		<div className='work-section-wrapper'>
			<div className='work-section-top'>
				<p className='primary-subheading'>Testimonial</p>
				<h1 className='primary-heading'>What People Are Saying</h1>
				<p className='primary-text'>
					We are a diverse group of friends with many interests.
				</p>
			</div>
			<div className='testimonial-section-bottom'>
				<img src={ProfilePic} alt='' />
				<p>"He's here to meet a 15 year old girl!"</p>
				<div className='testimonials-stars-container'>
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<h2>~ Ronald Li</h2>
			</div>
		</div>
	);
};

export default Testimonial;
