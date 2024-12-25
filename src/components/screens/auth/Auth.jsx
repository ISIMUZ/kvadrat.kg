import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.scss'

const Auth = ({ onLogin }) => {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')
	const [isRegistering, setIsRegistering] = useState(false)
	const navigate = useNavigate()

	const togglePasswordVisibility = () => {
		setPasswordVisible((prev) => !prev)
	}

	const handleLoginSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await fetch('http://192.168.0.106:8087/auth/log', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username: login, password }),
				credentials: 'include',
			})

			if (response.ok) {
				const data = await response.json()
				if (data.token) {
					localStorage.setItem('jwt_token', data.token)
					onLogin()
					navigate('/admin')
				} else {
					setError('Токен не найден в ответе')
				}
			} else {
				const errorData = await response.json()
				setError(errorData.message || 'Неверный логин или пароль')
			}
		} catch (error) {
			console.error(error)
		}
	}

	const handleRegisterSubmit = async (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			setError('Пароли не совпадают')
			return
		}

		try {
			const response = await fetch('http://192.168.0.106:8087/auth/reg', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username: login, password, email }),
			})

			if (response.ok) {
				setError('')
				setIsRegistering(false)
			} else {
				const errorData = await response.json()
				setError(errorData.message || 'Ошибка при регистрации')
			}
		} catch (error) {
			setError('Произошла ошибка. Попробуйте позже.')
		}
	}

	return (
		<main className='auth'>
			<div className='container'>
				<div className='auth-content'>
					{isRegistering ? (
						<form className='auth-content-form' onSubmit={handleRegisterSubmit}>
							<h2 className='auth-content-form__title'>Регистрация</h2>
							{error && <p className='auth-error'>{error}</p>}

							<span className='auth-content-form__inp'>
								<input
									type='text'
									placeholder='Логин'
									value={login}
									onChange={(e) => setLogin(e.target.value)}
								/>
								<i className='ic_user icons'></i>
							</span>

							<span className='auth-content-form__inp'>
								<input
									placeholder='Пароль'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type={passwordVisible ? 'text' : 'password'}
								/>
								<i className='ic_password icons'></i>
								<i
									className={`ic_${passwordVisible ? 'eye' : 'eye-close'} eye-icon icons`}
									onClick={togglePasswordVisibility}
								></i>
							</span>

							<span className='auth-content-form__inp'>
								<input
									placeholder='Подтвердите пароль'
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									type={passwordVisible ? 'text' : 'password'}
								/>
								<i className='ic_password icons'></i>
								<i
									className={`ic_${passwordVisible ? 'eye' : 'eye-close'} eye-icon icons`}
									onClick={togglePasswordVisibility}
								></i>
							</span>
							<span className='auth-content-form__inp'>
								<input
									type='email'
									placeholder='Email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<i className='ic_email icons'></i>
							</span>

							<button type='submit'>Зарегистрироваться</button>
							<p
								onClick={() => setIsRegistering(false)}
								className='auth-switch-link'
							>
								Уже есть аккаунт? Войти
							</p>
						</form>
					) : (
						<form className='auth-content-form' onSubmit={handleLoginSubmit}>
							<h2 className='auth-content-form__title'>Вход</h2>
							{error && <p className='auth-error'>{error}</p>}
							<span className='auth-content-form__inp'>
								<input
									type='text'
									placeholder='Логин'
									value={login}
									onChange={(e) => setLogin(e.target.value)}
								/>
								<i className='ic_user icons'></i>
							</span>
							<span className='auth-content-form__inp'>
								<input
									placeholder='Пароль'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type={passwordVisible ? 'text' : 'password'}
								/>
								<i className='ic_password icons'></i>
								<i
									className={`ic_${passwordVisible ? 'eye' : 'eye-close'} eye-icon icons`}
									onClick={togglePasswordVisibility}
								></i>
							</span>
							<button type='submit'>Войти</button>
							<p
								onClick={() => setIsRegistering(true)}
								className='auth-switch-link'
							>
								Нет аккаунта? Зарегистрироваться
							</p>
						</form>
					)}
				</div>
			</div>
		</main>
	)
}

export default Auth
