import React from 'react'

import Counseling from '../../counseling/Counseling'
import Form from '../../form/Form'

import './Mortgage.scss'

const Mortgage = () => {
	return (
		<main className='mortgage'>
			<div className='mortgage-content'>
				<div className='wrapper'>
					<div className='mortgage-content-form'>
						<h1 className='mortgage-content-form__title'>
							Наша компания <span>KVADRAT KG</span> поможет Вам с выбором и
							подбором квартиры, идеально подходящей под Ваш бюджет!
						</h1>
						<Form />
					</div>
					<div className='mortgage-content-hero'>
						<h2 className='mortgage-content-hero__title'>Что такое ипотека?</h2>
						<p className='mortgage-content-hero__desc'>
							Ипотека — это кредит, который выдается банком для покупки
							недвижимости. Главная особенность ипотеки в том, что приобретенная
							недвижимость становится залогом до полного погашения долга. Для
							оформления кредита обычно требуется внести первоначальный взнос
							(10–25% от стоимости объекта), а оставшуюся сумму выплачивать
							частями в течение длительного срока (5–35 лет) с учетом процентов.
							Ипотека позволяет купить жилье сразу, не дожидаясь накопления всей
							суммы, но важно учитывать, что переплата за счет процентов может
							быть значительной.
						</p>
					</div>
					<Counseling />
				</div>
			</div>
		</main>
	)
}

export default Mortgage
