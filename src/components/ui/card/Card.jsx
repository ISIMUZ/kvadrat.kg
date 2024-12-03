import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GrLocation } from 'react-icons/gr'
import { useTranslation } from 'react-i18next';

import './Card.scss'

const Card = ({ page }) => {
	const { t } = useTranslation();

	const [image, setImage] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios
			.get(`https://picsum.photos/v2/list?page=${page}&limit=6`)
			.then((response) => {
				setImage(response.data[0])
				setIsLoading(false)
			})
			.catch((error) => {
				console.error('Ошибка при получении изображения:', error)
				setIsLoading(false)
			})
	}, [page])

	return (
		<div className='card'>
			<div className='card-content'>
				{isLoading ? (
					<p>Загрузка...</p>
				) : (
					<div className='card-img'>
						{image && <img src={image.download_url} alt={image.author} />}
						<div className='card-overlay'></div>
						<h3 className='card-more'>{t('more')}</h3>
					</div>
				)}
			</div>
			<div className='card-characteristics'>
				<span className='card-price flex items-center justify-between'>
					Цена:
					<h3>10 000 000 $</h3>
				</span>
        <p className="card-desc">
          2 комнатная  ·  78&nbsp;м²  ·  10/14 этаж
        </p>
        <h3 className='card-address flex items-center gap-x-1'> <GrLocation className='text-[20px] text-red'/>Филармония</h3>
			</div>
		</div>
	)
}

export default Card
