import React from 'react'

import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { BiHome } from 'react-icons/bi'
import { AiOutlineShop } from 'react-icons/ai'
import { GrServices } from 'react-icons/gr'
import { RiContactsBook2Line } from 'react-icons/ri'
import { MdOutlineInfo } from 'react-icons/md'

import './Menu.scss'

const Menu = ({ active, setActive }) => {
	return (
		<div
			className={active ? 'menu active' : 'menu'}
			onClick={() => setActive(false)}
		>
			<div className='menu-content' onClick={(e) => e.stopPropagation()}>
				{/* <a href='tel:+996708242906'>0708 242 906</a>
				<a href='tel:+996708242906'>0708 242 906</a> */}
				<FaTimes
					className='menu-content-close'
					onClick={() => setActive(false)}
				/>
				<nav className='menu-content-links'>
					{[
						{ path: '/', label: 'Главная', icon: <BiHome /> },
						{
							path: '/buy-property',
							label: 'Купить Недвижимость',
							icon: <AiOutlineShop />,
						},
						{ path: '/services', label: 'Услуги', icon: <GrServices /> },
						{
							path: '/contacts',
							label: 'Контакты',
							icon: <RiContactsBook2Line />,
						},
						{ path: '/about-us', label: 'О Компании', icon: <MdOutlineInfo /> },
					].map(({ path, label, icon }) => (
						<NavLink
							key={path}
							to={path}
							className='menu-content-links__link'
							onClick={() => setActive(false)}
						>
							<span className='menu-content-links__icon'>{icon}</span>
							<span className='menu-content-links__text'>{label}</span>
						</NavLink>
					))}
				</nav>
			</div>
		</div>
	)
}

export default Menu
