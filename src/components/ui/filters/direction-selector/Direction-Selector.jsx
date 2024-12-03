import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import './Direction-Selector.scss'

const DirectionSelector = ({ direction, setDirection }) => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef(null)

	const options = [
		{ label: 'Под бизнес', value: 'direction1' },
		{ label: 'Под строительство', value: 'direction2' },
		{ label: 'Сельхоз', value: 'direction3' },
	]

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev)
	}

	const handleCheckboxChange = (value) => {
		if (direction.includes(value)) {
			setDirection(direction.filter((item) => item !== value))
		} else {
			setDirection([...direction, value])
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
		<div className='filter-direction' ref={dropdownRef}>
			<label className='filter-direction__title'>{t('assignment')}</label>
			<div className='filter-direction-dropdown' onClick={toggleDropdown}>
				<div className='filter-direction-dropdown__selected'>
					{direction.length > 0
						? direction
								.map(
									(val) => options.find((option) => option.value === val).label
								)
								.join(', ')
						: t('select')}
					<IoIosArrowDown />
				</div>
			</div>
			{isOpen && (
				<div className='filter-direction-options' onClick={handleDropdownClick}>
					{options.map((option) => (
						<label
							key={option.value}
							className='filter-direction-options__content'
						>
							<input
								type='checkbox'
								checked={direction.includes(option.value)}
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

export default DirectionSelector
