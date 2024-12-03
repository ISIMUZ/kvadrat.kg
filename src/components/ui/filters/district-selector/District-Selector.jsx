import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosArrowDown } from 'react-icons/io'

import './District-Selector.scss'

const DistrictSelector = ({ district, setDistrict }) => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef(null)

	const options = [
		{ label: 'Асанбай', value: 'district1' },
		{ label: 'Джал', value: 'district2' },
		{ label: 'Филармония', value: 'district3' },
	]

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev)
	}

	const handleCheckboxChange = (value) => {
		if (district.includes(value)) {
			setDistrict(district.filter((item) => item !== value))
		} else {
			setDistrict([...district, value])
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
		<div className='filter-district' ref={dropdownRef}>
			<label className='filter-district__title'>Район</label>
			<div className='filter-district-dropdown' onClick={toggleDropdown}>
				<div className='filter-district-dropdown__selected'>
					{district.length > 0
						? district
								.map(
									(val) => options.find((option) => option.value === val).label
								)
								.join(', ')
						: t('select')}
					<IoIosArrowDown />
				</div>
			</div>
			{isOpen && (
				<div className='filter-district-options' onClick={handleDropdownClick}>
					{options.map((option) => (
						<label
							key={option.value}
							className='filter-district-options__content'
						>
							<input
								type='checkbox'
								checked={district.includes(option.value)}
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

export default DistrictSelector
