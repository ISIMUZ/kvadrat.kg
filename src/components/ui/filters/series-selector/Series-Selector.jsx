import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import './Series-Selector.scss'

const SeriesSelector = ({ series, setSeries }) => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef(null)

	const options = [
		{ label: '104 серия', value: 'series1' },
		{ label: '105 серия', value: 'series2' },
		{ label: '106 серия', value: 'series3' },
		{ label: '106 улучшенная', value: 'series4' },
		{ label: '108 серия', value: 'series5' },
		{ label: 'Сталинка', value: 'series6' },
		{ label: 'Хрущёвка', value: 'series7' },
		{ label: 'Индивидуальный проект', value: 'series8' },
		{ label: 'Гостинка / Общежитие', value: 'series9' },
	]

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev)
	}

	const handleCheckboxChange = (value) => {
		if (series.includes(value)) {
			setSeries(series.filter((item) => item !== value))
		} else {
			setSeries([...series, value])
		}
	}

	const handleDropdownClick = (e) => {
		e.stopPropagation()
	}

	const handleClickOutside = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div className='filter-series series-selector' ref={dropdownRef}>
			<label className='filter-series__title'>Серия</label>
			<div className='filter-series-dropdown' onClick={toggleDropdown}>
				<div className='filter-series-dropdown__selected'>
					{series.length > 0
						? series
								.map(
									(val) => options.find((option) => option.value === val).label
								)
								.join(', ')
						: t('select')}
					<IoIosArrowDown />
				</div>
			</div>
			{isOpen && (
				<div className='filter-series-options' onClick={handleDropdownClick}>
					{options.map((option) => (
						<label
							key={option.value}
							className='filter-series-options__content'
						>
							<input
								type='checkbox'
								checked={series.includes(option.value)}
								onChange={() => handleCheckboxChange(option.value)}
							/>
							<div className='custom-checkbox'></div>
							{option.label}
						</label>
					))}
				</div>
			)}
		</div>
	)
}

export default SeriesSelector
