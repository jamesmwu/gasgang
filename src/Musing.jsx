import Mario from './Assets/mario.png';
import { useState } from 'react';

var i = 0;
const musingData = [
	'Sometimes you have to be unproductive to be productive.',
	"Welp, this education won't learn itself.",
	"I'm just gonna sit here in my snot.",
	"That's the way the cookie crumbles.",
	"That's the way she goes and there's nothing else we can do about it except be depressed.",
	''
];

export default function Musing() {
	const [musing, setMusing] = useState('');

	function handleMuse() {
		i++;
		if (i >= musingData.length) {
			i = 0;
		}
		setMusing(musingData[i]);
	}

	return (
		<div id='mario' className='fade-in'>
			<h1>Mario's Musings</h1>
			<img src={Mario} alt='' />
			<p className='mario-text'>
				Some regard him a philosopher. Others revere his wise words as they
				would the letter of God himself. Wherever you're from, whatever you
				believe, and whoever you are, we can all collectively agree that they go
				hard.
			</p>
			<button className='secondary-button' onClick={handleMuse}>
				Get Musing
			</button>
			<h1 className='musing-text'>{musing}</h1>
		</div>
	);
}
