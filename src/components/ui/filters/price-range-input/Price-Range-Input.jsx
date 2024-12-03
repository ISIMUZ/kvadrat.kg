import React from 'react'
import { useTranslation } from 'react-i18next'

import './Price-Range-Input.scss'

const PriceRangeInput = ({ minPrice, maxPrice, setPriceRange }) => {
	const { t } = useTranslation()

	return (
		<div className='filter-price'>
			<label className='filter-price__title'>{t('price')}</label>
			<div className='filter-price__inp'>
				<input
					placeholder='мин'
					value={minPrice}
					onChange={(e) => setPriceRange(e.target.value, maxPrice)}
				/>
				<input
					placeholder='макс'
					value={maxPrice}
					onChange={(e) => setPriceRange(minPrice, e.target.value)}
				/>
			</div>
		</div>
	)
}

export default PriceRangeInput
