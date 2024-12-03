import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { pablicRoutes } from '../components/routes/routes'

import WelcomePage from '@components/screens/welcome/Welcome'
import Layout from './layout/layout'
import Auth from '../components/screens/auth/Auth'
import Admin from '../components/screens/admin/Admin'
import i18n from './i18n'

import '@styles/index.scss'

const App = () => {
	const [isLanguageSelected, setIsLanguageSelected] = useState(false)
	const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

	useEffect(() => {
		const selectedLanguage = localStorage.getItem('selectedLanguage')
		if (selectedLanguage) {
			i18n.changeLanguage(selectedLanguage)
			setIsLanguageSelected(true)
		}

		const adminStatus = localStorage.getItem('isAdminLoggedIn')
		setIsAdminLoggedIn(adminStatus === 'true')
	}, [])

	const handleLanguageSelect = (lang) => {
		i18n.changeLanguage(lang)
		localStorage.setItem('selectedLanguage', lang)
		setIsLanguageSelected(true)
	}

	const handleLogin = () => {
		setIsAdminLoggedIn(true)
		localStorage.setItem('isAdminLoggedIn', 'true')
	}

	const handleLogout = () => {
		setIsAdminLoggedIn(false)
		localStorage.removeItem('isAdminLoggedIn')
	}

	if (!isLanguageSelected) {
		return <WelcomePage onSelectLanguage={handleLanguageSelect} />
	}

	return (
		<>
			<Layout isAdmin={isAdminLoggedIn} onLogout={handleLogout}>
				<Routes>
					{pablicRoutes.map(({ path, Component }, index) => (
						<Route key={index} path={path} element={<Component />} />
					))}
					<Route
						path='/admin'
						element={
							isAdminLoggedIn ? (
								<Admin onLogout={handleLogout} />
							) : (
								<Navigate to='/auth' replace />
							)
						}
					/>
					<Route path='/auth' element={<Auth onLogin={handleLogin} />} />
				</Routes>
			</Layout>
		</>
	)
}

export default App
