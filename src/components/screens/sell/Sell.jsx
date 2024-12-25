import React from 'react'

import IntroText from './intro-text/Intro-Text'

import Counseling from '../../counseling/Counseling'
import Form from '../../form/Form'
import './Sell.scss'

const Sell = () => {
	return (
		<main className='sell'>
			<div className='container'>
				<div className='sell-content'>
					<div className='wrapper'>
						<div className='sell-content-form'>
							<IntroText
								title='Как выгодно продать недвижимость?'
								suptitle='Мы поможем вам:'
								reasons1='Проконсультируем'
								reasons2='Оценим вашу недвижимость'
								reasons3='Заключаем эксклюзивный договор'
								reasons4='Размещаем рекламу'
							/>
							<Form />
						</div>
						<div className='sell-hero'>
							<h2 className='sell-hero__title'>
								Продавайте свою недвижимость вместе с <span>KVADRAT.KG</span>
							</h2>
							<p className='sell-hero__desc'>
								Агентство недвижимости <span>KVADRAT.KG</span> — ваш надежный
								партнер в продаже недвижимости! За годы успешной работы мы
								накопили большой опыт, применяем эффективные маркетинговые
								инструменты и постоянно внедряем инновации, чтобы помогать нашим
								клиентам достигать их целей. Мы ценим ваше время и делаем все
								возможное, чтобы процесс продажи или аренды был простым и
								результативным. Благодаря профессионализму нашей команды и
								современным подходам к работе, вы получаете не только быстрое
								решение своих задач, но и уверенность в каждом этапе сделки. С
								<span> KVADRAT.KG</span> вы можете быть уверены: ваши интересы в
								надежных руках!
							</p>
						</div>
						<div className='sell-how'>
							<h2 className='sell-how__title'>Как это работает?</h2>
							<div className='sell-how-cards'>
								<div className='sell-how-cards-card'>
									<h3 className='sell-how-cards-card__suptitle'>
										Эффективная реклама
									</h3>
									<p className='sell-how-cards-card__desc'>
										Мы размещаем ваше объявление на нашем сайте и в соцсетях,
										чтобы уже через несколько часов начать получать звонки от
										покупателей!
									</p>
								</div>
								<div className='sell-how-cards-card'>
									<h3 className='sell-how-cards-card__suptitle'>
										Анализ рынка
									</h3>
									<p className='sell-how-cards-card__desc'>
										Мы знаем не только цены размещения, но и реальные цены
										продаж, поэтому наша оценка максимально точна.
									</p>
								</div>
								<div className='sell-how-cards-card'>
									<h3 className='sell-how-cards-card__suptitle'>
										Грамотная оценка недвижимости
									</h3>
									<p className='sell-how-cards-card__desc'>
										Мы не только знаем, по каким ценам размещаются предложения,
										но и реальную стоимость, по которой происходят продажи.
										Именно поэтому наша оценка максимально приближена к
										действительности.
									</p>
								</div>
								<div className='sell-how-cards-card'>
									<h3 className='sell-how-cards-card__suptitle'>
										Деловой подход к работе с покупателями
									</h3>
									<p className='sell-how-cards-card__desc'>
										Общение с потенциальными покупателями требует особого
										подхода. Иногда даже одно неосторожное слово может испортить
										впечатление и отложить успешное заключение сделки.
									</p>
								</div>
								<div className='sell-how-cards-card'>
									<h3 className='sell-how-cards-card__suptitle'>
										Качественное оформление документов
									</h3>
									<p className='sell-how-cards-card__desc'>
										Даже при наличии заинтересованных покупателей их легко можно
										потерять, если документы будут оформлены неправильно или не
										вовремя.
									</p>
								</div>
								<div className='sell-how-cards-card'>
									<h3 className='sell-how-cards-card__suptitle'>
										Юридическое сопровождение
									</h3>
									<p className='sell-how-cards-card__desc'>
										Наши специалисты предоставляют комплексную юридическую
										поддержку на каждом этапе сделки, обеспечивая надежность и
										безопасность процесса.
									</p>
								</div>
							</div>
						</div>
					</div>
					<Counseling />
				</div>
			</div>
		</main>
	)
}

export default Sell
