import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import '@assets/icon/style.scss'
import './Intro.scss'

const Intro = () => {
	const { t } = useTranslation()
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true)
					}
				})
			},
			{ threshold: 0.5 }
		)

		const introElement = document.querySelector('.intro-content')
		if (introElement) {
			observer.observe(introElement)
		}

		return () => {
			if (introElement) {
				observer.unobserve(introElement)
			}
		}
	}, [])

	return (
		<section className={`intro ${isVisible ? 'visible' : ''}`}>
			<div className='intro-content'>
				<h2
					className='intro-content__title'
					dangerouslySetInnerHTML={{ __html: t('introTitle') }}
				/>
				<p className='intro-content__desc'>{t('introDesc')}</p>
				<div className='intro-content-block'>
					<div className='intro-content-block__box'>
						<i className='ic_trusted'></i>
						<h4 className='intro-content-outline'>{t('serviceTitle')}</h4>
					</div>
					<div className='intro-content-block__box'>
						<i className='ic_sell' style={{ fontSize: '55px' }}></i>
						<h4 className='intro-content-outline'>{t('buySellTitle')}</h4>
					</div>
					<div className='intro-content-block__box'>
						<i className='ic_services'></i>
						<h4 className='intro-content-outline'>{t('trustTitle')}</h4>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Intro
