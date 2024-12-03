import React from 'react'

import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

import './Menu.scss'

const Menu = ({ active, setActive }) => {

	return (
		<div
			className={active ? 'menu active' : 'menu'}
			onClick={() => setActive(false)}
		>
			<div className='menu-content' onClick={(e) => e.stopPropagation()}>
      <FaTimes className='menu-content-close' onClick={() => setActive(false)} />
				<nav className='menu-content-links'>
					{[
						{ path: '/', label: 'Главная' },
						{ path: '/buy-property', label: 'Купить Недвижимость' },
						{ path: '/services', label: 'Услуги' },
						{ path: '/contacts', label: 'Контакты' },
						{ path: '/about-us', label: 'О Компании' },
					].map(({ path, label }) => (
						<NavLink key={path} to={path} className='menu-content-links__link'>
							{label}
						</NavLink>
					))}
				</nav>
			</div>
		</div>
	)
}

export default Menu
