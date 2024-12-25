import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

import Button from '@components/ui/button/Button'
import './Hero.scss'

const Hero = () => {
	const { t } = useTranslation()
	const [isVisible, setIsVisible] = useState(false)

	const handleButtonClick = () => {
		console.log('Button clicked!')
	}

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

		const heroContent = document.querySelector('.hero-content')
		if (heroContent) {
			observer.observe(heroContent)
		}

		return () => {
			if (heroContent) {
				observer.unobserve(heroContent)
			}
		}
	}, [])

	const images = [
		'/images/img1.jpg',
		'/images/img4.jpg',
		'/images/img3.jpg',
		'/images/img2.jpg',
		'/images/img5.jpg',
	]

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	}

	return (
		<section className='hero'>
			<div className='hero-wrapper'>
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index} className='hero-slide'>
							<img src={image} alt={`Slide ${index}`} className='hero-image' />
						</div>
					))}
				</Slider>
			</div>
			<div
				className={`hero-content ${isVisible ? 'visible' : ''}`}
				data-mark='Hero'
			>
				<h2
					className='hero-content__title'
					dangerouslySetInnerHTML={{ __html: t('heroTitle') }}
				/>
				<div className='hero-content__tab'>
					<Button
						text={t('buy')}
						href='/buy-property'
						onClick={handleButtonClick}
					/>
					<Button text={t('sell')} onClick={handleButtonClick} href='/sell' />
					<Button
						text={t('mortgage')}
						onClick={handleButtonClick}
						href='/mortgage'
					/>
					<Button
						text={t('appraisal')}
						onClick={handleButtonClick}
						href='/appraisal'
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
