import React from 'react'

import './Land-Area-Input.scss'

const LandAreaInput = ({
	landAreaFrom,
	setLandAreaFrom,
	landAreaTo,
	setLandAreaTo,
}) => {
	return (
		<div className='filter-land'>
			<label className='filter-land__title'>Сотки</label>
			<div className='filter-land__inp'>
				<input
					type='number'
					placeholder='от'
					value={landAreaFrom}
					onChange={(e) => setLandAreaFrom(e.target.value)}
				/>
				<input
					type='number'
					placeholder='до'
					value={landAreaTo}
					onChange={(e) => setLandAreaTo(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default LandAreaInput
