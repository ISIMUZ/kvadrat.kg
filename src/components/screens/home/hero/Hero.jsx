import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'

import Button from '@components/ui/button/Button'
import './Hero.scss'

const Hero = () => {
	const { t } = useTranslation()

	const handleButtonClick = () => {
		console.log('Button clicked!')
	}

	useEffect(() => {
		document.querySelectorAll('button').forEach((button) => {
			button.innerHTML =
				'<div><span>' +
				button.textContent.trim().split('').join('</span><span>') +
				'</span></div>'
		})
	}, [])

	const images = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg']

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
			<div className='hero-content' data-mark='Hero'>
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
					<Button text={t('mortgage')} onClick={handleButtonClick} />
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
