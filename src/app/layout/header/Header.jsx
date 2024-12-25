import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import classNames from 'classnames'
import { FaBars } from 'react-icons/fa'

import Menu from '../../../components/menu/Menu'

import './Header.scss'

const Header = ({ isAdmin }) => {
	const [menuActive, setMenuActive] = useState(false)
	const [isActive, setActive] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setActive(window.pageYOffset > 5)
		}
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header className={classNames('header', { header_active: isActive })}>
			<div className='wrapper'>
				<div className='header-content'>
					<Link to={'/'}>
						<i className='ic_logo' aria-label='Company Logo'></i>
					</Link>

					<nav className='header-content-links'>
						{[
							{ path: '/', label: 'Главная' },
							{ path: '/buy-property', label: 'Купить Недвижимость' },
							{ path: '/services', label: 'Услуги' },
							{ path: '/contacts', label: 'Контакты' },
							{ path: '/about-us', label: 'О Компании' },
						].map(({ path, label }) => (
							<NavLink
								key={path}
								to={path}
								className={({ isActive }) =>
									classNames('header-content-links__link', {
										'active-link': isActive,
									})
								}
							>
								{label}
							</NavLink>
						))}
					</nav>
					<FaBars
						className='header-content-burger'
						onClick={() => setMenuActive(!menuActive)}
					/>
					{isAdmin && (
						<div className='header-profile'>
							<NavLink to='/admin'>
								<i className='ic_profile' aria-label='Admin Profile Icon'></i>{' '}
								Профиль
							</NavLink>
						</div>
					)}
				</div>
			</div>
			<Menu active={menuActive} setActive={setMenuActive} />
		</header>
	)
}

export default Header
