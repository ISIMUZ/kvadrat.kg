import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import RoomSelector from './room-selector/Room-Selector'
import DistrictSelector from './district-selector/District-Selector'
import PriceRangeInput from './price-range-input/Price-Range-Input'
import SeriesSelector from './series-selector/Series-Selector'
import LandAreaInput from './land-area-input/Land-Area-Input'
import DirectionSelector from './direction-selector/Direction-Selector'
import PropertyTypeSelector from './property-type-selector/Property-Type-Selector'
import AreaInput from './area-input/Area-Input'

import '@assets/icon/style.css'
import './Filters.scss'

const Filter = () => {
	const { t } = useTranslation()
	const [activeTab, setActiveTab] = useState('apartments')
	const [filters, setFilters] = useState({
		rooms: null,
		district: '',
		minPrice: '',
		maxPrice: '',
		series: '',
		landArea: '',
		direction: '',
		propertyType: '',
		area: '',
	})

	const applyFilters = () => {
		console.log('Примененные фильтры:', filters)
	}

	return (
		<section className='filter'>
			<div className='filter-wrapper'>
				<div className='filter-tabs'>
					<button
						onClick={() => setActiveTab('apartments')}
						className={`${activeTab === 'apartments' ? 'active' : ''} ${'filter-tabs__btn'}`}
					>
						{t('flat')}
					</button>
					<button
						onClick={() => setActiveTab('houses')}
						className={`${activeTab === 'houses' ? 'active' : ''} ${'filter-tabs__btn'}`}
					>
						{t('house')}
					</button>
					<button
						onClick={() => setActiveTab('plots')}
						className={`${activeTab === 'plots' ? 'active' : ''} ${'filter-tabs__btn'}`}
					>
						{t('plot')}
					</button>
					<button
						onClick={() => setActiveTab('commercial')}
						className={`${activeTab === 'commercial' ? 'active' : ''} ${'filter-tabs__btn'}`}
					>
						{t('commerces')}
					</button>
				</div>

				{activeTab === 'apartments' && (
					<>
						<div className='filter-filters'>
							<RoomSelector
								rooms={filters.rooms}
								setRooms={(rooms) => setFilters({ ...filters, rooms })}
							/>
							<SeriesSelector
								series={filters.series}
								setSeries={(series) => setFilters({ ...filters, series })}
							/>
							<DistrictSelector
								district={filters.district}
								setDistrict={(district) => setFilters({ ...filters, district })}
							/>
							<PriceRangeInput
								minPrice={filters.minPrice}
								maxPrice={filters.maxPrice}
								setPriceRange={(minPrice, maxPrice) =>
									setFilters({ ...filters, minPrice, maxPrice })
								}
							/>
						</div>
					</>
				)}

				{activeTab === 'houses' && (
					<>
						<div className='filter-filters'>
							<RoomSelector
								rooms={filters.rooms}
								setRooms={(rooms) => setFilters({ ...filters, rooms })}
							/>
							<LandAreaInput
								landArea={filters.landArea}
								setLandArea={(landArea) => setFilters({ ...filters, landArea })}
							/>
							<DistrictSelector
								district={filters.district}
								setDistrict={(district) => setFilters({ ...filters, district })}
							/>
							<PriceRangeInput
								minPrice={filters.minPrice}
								maxPrice={filters.maxPrice}
								setPriceRange={(minPrice, maxPrice) =>
									setFilters({ ...filters, minPrice, maxPrice })
								}
							/>
						</div>
					</>
				)}

				{activeTab === 'plots' && (
					<>
						<div className='filter-filters'>
							<DirectionSelector
								direction={filters.direction}
								setDirection={(direction) =>
									setFilters({ ...filters, direction })
								}
							/>
							<LandAreaInput
								landArea={filters.landArea}
								setLandArea={(landArea) => setFilters({ ...filters, landArea })}
							/>
							<DistrictSelector
								district={filters.district}
								setDistrict={(district) => setFilters({ ...filters, district })}
							/>
							<PriceRangeInput
								minPrice={filters.minPrice}
								maxPrice={filters.maxPrice}
								setPriceRange={(minPrice, maxPrice) =>
									setFilters({ ...filters, minPrice, maxPrice })
								}
							/>
						</div>
					</>
				)}

				{activeTab === 'commercial' && (
					<>
						<div className='filter-filters'>
							<PropertyTypeSelector
								propertyType={filters.propertyType}
								setPropertyType={(propertyType) =>
									setFilters({ ...filters, propertyType })
								}
							/>
							<AreaInput
								area={filters.area}
								setArea={(area) => setFilters({ ...filters, area })}
							/>
							<DistrictSelector
								district={filters.district}
								setDistrict={(district) => setFilters({ ...filters, district })}
							/>
							<PriceRangeInput
								minPrice={filters.minPrice}
								maxPrice={filters.maxPrice}
								setPriceRange={(minPrice, maxPrice) =>
									setFilters({ ...filters, minPrice, maxPrice })
								}
							/>
						</div>
					</>
				)}
				<button onClick={applyFilters}>Показать результаты</button>
			</div>
		</section>
	)
}

export default Filter
