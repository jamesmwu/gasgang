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
				<p>
					I told Phillip my life story, to which he responded "EREN JAEGER" and
					"AUUUUGHHHHHH". I then heard Ben call Kaity a midget and Amy reply
					"ahhhHHHHHhHhhhh". 10/10 experience
				</p>
				<div className='testimonials-stars-container'>
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<h2>Deez Nuts</h2>
			</div>
		</div>
	);
};

export default Testimonial;
