import React from 'react'

import './Area-Input.scss'

const AreaInput = ({ areaFrom, areaTo, setAreaFrom, setAreaTo }) => {
	return (
		<div className='filter-area'>
			<label className='filter-area__title'>Площадь (кв. м)</label>
			<div className='filter-area__inp'>
				<input
					placeholder='от'
					value={areaFrom}
					onChange={(e) => setAreaFrom(e.target.value)}
				/>
				<input
					placeholder='до'
					value={areaTo}
					onChange={(e) => setAreaTo(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default AreaInput
