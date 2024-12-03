import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import './Property-Type-Selector.scss'

const PropertyTypeSelector = ({ propertyType, setPropertyType }) => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef(null)

	const options = [
		{ label: 'Офиc', value: 'property1' },
		{ label: 'Готовый бизнес', value: 'property2' },
		{ label: 'Магазин', value: 'property3' },
	]

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev)
	}

	const handleCheckboxChange = (value) => {
		if (propertyType.includes(value)) {
			setPropertyType(propertyType.filter((item) => item !== value))
		} else {
			setPropertyType([...propertyType, value])
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
		<div className='filter-property' ref={dropdownRef}>
			<label className='filter-property__title'>{t('commerce')}</label>
			<div className='filter-property-dropdown' onClick={toggleDropdown}>
				<div className='filter-property-dropdown__selected'>
					{propertyType.length > 0
						? propertyType
								.map(
									(val) => options.find((option) => option.value === val).label
								)
								.join(', ')
						: t('select')}
					<IoIosArrowDown />
				</div>
			</div>
			{isOpen && (
				<div className='filter-property-options' onClick={handleDropdownClick}>
					{options.map((option) => (
						<label
							key={option.value}
							className='filter-property-options__content'
						>
							<input
								type='checkbox'
								checked={propertyType.includes(option.value)}
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

export default PropertyTypeSelector
