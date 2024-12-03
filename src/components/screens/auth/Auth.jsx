import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './Auth.scss';

const Auth = ({ onLogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
			const response = await fetch('http://localhost:5000/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username: login, password }),
			});
	
			if (response.ok) {
				onLogin();
				navigate('/admin');
			} else {
				const errorData = await response.json();
				setError(errorData.message);
			}
		} catch (error) {
			setError('Произошла ошибка. Попробуйте позже.');
		}
	};

  return (
    <main className="auth">
      <div className="container">
        <div className="auth-content">
          <form className="auth-content-form" onSubmit={handleSubmit}>
            <h2 className="auth-content-form__title">Вход</h2>
            {error && <p className="auth-error">{error}</p>}
            <span className="auth-content-form__inp">
              <input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <i className="ic_user icons"></i>
            </span>
            <span className="auth-content-form__inp">
              <input
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? 'text' : 'password'}
              />
              <i className="ic_password icons"></i>
              <i
                className={`ic_${passwordVisible ? 'eye' : 'eye-close'} eye-icon icons`}
                onClick={togglePasswordVisibility}
              ></i>
            </span>
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Auth;
