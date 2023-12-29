import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';
import WorkImage from '../Assets/work-image.png';

const Work = () => {
	const workInfoData = [
		{
			image: PickMeals,
			title: 'Food',
			text: 'Mario only gets $153 on EBT and the brother is starving'
		},
		{
			image: ChooseMeals,
			title: 'Ls',
			text: 'Fun fact, my right thumb is deformed and I cannot do a full L with it like in the above icon'
		},
		{
			image: DeliveryMeals,
			title: 'Moving out',
			text: 'In just a year, we will move away and may never see each other again'
		}
	];
	return (
		<div className='work-section-wrapper'>
			<div className='work-section-top'>
				<p className='primary-subheading'>Work</p>
				<h1 className='primary-heading'>We want money</h1>
				<div className='work-desc-flex'>
					<p className='primary-text-left'>
						Some of us want internships. Others want medschool acceptances.
						Collectively, this is the ultimate goal that unites us.
					</p>
					<img src={WorkImage} alt='' />
				</div>
			</div>

			<div className='work-section-bottom'>
				{workInfoData.map((data) => (
					<div className='work-section-info' key={data.title}>
						<div className='info-boxes-img-container'>
							<img src={data.image} alt='' />
						</div>
						<h2>{data.title}</h2>
						<p>{data.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
