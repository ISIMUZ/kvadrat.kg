import React from 'react'

import Button from '@components/ui/button/Button'
import './Welcome.scss'

function WelcomePage({ onSelectLanguage }) {
	return (
		<main className='welcome'>
			<div className='welcome-content'>
				<h1 className='welcome-content__title'>
					Добро пожаловать / Кош келдиңиз
				</h1>
				<p className='welcome-content__selection'>
					Выберите язык / Тилди тандоо
				</p>
				<div className='welcome-content__buttons'>
					<Button onClick={() => onSelectLanguage('ru')} text={"Русский"}/>
					<Button onClick={() => onSelectLanguage('ky')} text={"Кыргызча"}/>
				</div>
			</div>
		</main>
	)
}

export default WelcomePage
