import React from 'react'
import { useTranslation } from 'react-i18next'

import Counseling from '../../counseling/Counseling'

import '@assets/icon/style.scss'
import './Services.scss'

const Services = () => {
	const { t } = useTranslation()
	return (
		<main className='services'>
			<div className='container'>
				<div className='services-content'>
					<h2 className='services-content__title'>
						{t('services')}
					</h2>
					<div className='services-content-cards'>
						<div className='services-content-cards__card'>
							<div className='services-content-cards__card-icon'>
								<i className='ic_selection'></i>
							</div>
							<h3 className='services-content-cards__card-suptitle'>
							{t('selection')}
							</h3>
							<p className='services-content-cards__card-desc'>
							{t('selectionMore')}
							</p>
						</div>
						<div className='services-content-cards__card'>
							<div className='services-content-cards__card-icon'>
								<i className='ic_sell'></i>
							</div>
							<h3 className='services-content-cards__card-suptitle'>
							{t('estate')}
							</h3>
							<p className='services-content-cards__card-desc'>
							{t('estateMore')}
							</p>
						</div>
						<div className='services-content-cards__card'>
							<div className='services-content-cards__card-icon'>
								<i className='ic_advertisement'></i>
							</div>
							<h3 className='services-content-cards__card-suptitle'>
							{t('advertisements')}
							</h3>
							<p className='services-content-cards__card-desc'>
							{t('advertisementsMore')}
							</p>
						</div>
						<div className='services-content-cards__card'>
							<div className='services-content-cards__card-icon'>
								<i className='ic_accompaniment'></i>
							</div>
							<h3 className='services-content-cards__card-suptitle'>
							{t('legal')}
							</h3>
							<p className='services-content-cards__card-desc'>
							{t('legalMore')}
							</p>
						</div>
						<div className='services-content-cards__card'>
							<div className='services-content-cards__card-icon'>
								<i className='ic_appraisal'></i>
							</div>
							<h3 className='services-content-cards__card-suptitle'>
							{t('how')}
							</h3>
							<p className='services-content-cards__card-desc'>
							{t('howMore')}
							</p>
						</div>
						<div className='services-content-cards__card'>
							<div className='services-content-cards__card-icon'>
								<i className='ic_conculturation'></i>
							</div>
							<h3 className='services-content-cards__card-suptitle'>
							{t('conculturation')}
							</h3>
							<p className='services-content-cards__card-desc'>
							{t('conculturationMore')}
							</p>
						</div>
					</div>
				</div>
					<Counseling />
			</div>
		</main>
	)
}

export default Services
