import React from 'react'

import Counseling from '../../counseling/Counseling'
import IntroText from '../sell/intro-text/Intro-Text'

import './Appraisal.scss'
import Form from '../../form/Form'

const Appraisal = () => {
	return (
		<main className='appraisal'>
			<div className='appraisal-content'>
				<div className='wrapper'>
					<div className='appraisal-content-form'>
						<IntroText
							title={
								<>
									Мы осуществляем реальную оценку <br /> вашей недвижимости.
								</>
							}
							reasons1='Жилых помещений'
							reasons2='Торговой недвижимости'
							reasons3='Нежилых помещений широкого профиля'
							reasons4='Административных и офисных площадей'
						/>
						<Form />
					</div>
					<div className='appraisal-content-hero'>
						<h2 className='appraisal-content-hero__title'>
							Оценка недвижимости
						</h2>
						<p className='appraisal-content-hero__desc'>
							Оценка вашей недвижимости осуществляется профессиональными
							экспертами, имеющими необходимую сертификацию и опыт. Мы
							предоставляем полный спектр услуг, связанных с оценкой
							недвижимости, чтобы вы могли получить максимально точные и
							обоснованные данные. Обратившись к нам, вы сможете быстро и
							эффективно решить любые вопросы, связанные с оценкой вашей
							собственности.
						</p>
					</div>
					<Counseling />
				</div>
			</div>
		</main>
	)
}

export default Appraisal
