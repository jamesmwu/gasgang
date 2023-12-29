/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccessibilityNew from '@mui/icons-material/AccessibilityNew';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import ChildCare from '@mui/icons-material/ChildCare';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const menuOptions = [
		{
			text: 'Homies',
			icon: <AccessibilityNew />,
			link: '/'
		},
		// {
		// 	text: 'GGOTM',
		// 	icon: <DirectionsCar />
		// },
		{
			text: "Mario's Musings",
			icon: <ChildCare />,
			link: '/musing'
		}
	];
	return (
		<nav>
			<div className='nav-logo-container'>
				<Link to='/'>
					<h1>GAS GANG</h1>
				</Link>
			</div>
			<div className='navbar-links-container'>
				{/* <a href=''>Homies</a>
				<a href=''>GGOTM</a> */}
				<Link to='/musing'>Mario's Musings</Link>
				<a
					className='primary-button'
					href='https://account.venmo.com/u/jameswu21'
					target='_blank'
				>
					Tip :)
				</a>
			</div>
			<div className='navbar-menu-container'>
				<HiOutlineBars3 onClick={() => setOpenMenu(true)} />
			</div>
			<Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
				<Box
					sx={{ width: 250 }}
					role='presentation'
					onClick={() => setOpenMenu(false)}
					onKeyDown={() => setOpenMenu(false)}
				>
					<List>
						{menuOptions.map((item) => (
							<Link to={item.link} className='listdrawerlink'>
								<ListItem key={item.text} disablePadding>
									<ListItemButton>
										<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText primary={item.text} />
									</ListItemButton>
								</ListItem>
							</Link>
						))}
					</List>
					<Divider />
				</Box>
			</Drawer>
		</nav>
	);
};

export default Navbar;
