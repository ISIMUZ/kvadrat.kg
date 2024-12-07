import React from 'react'

import Carousel from './hero/Hero'
import Intro from './intro/Intro'
import Products from './products/Products'
import Counseling from '../../counseling/Counseling'

const Home = () => {
	return (
		<main className='home'>
			<div className='container'>
				<Carousel />
				<Intro />
				<Products />
				<Counseling />
			</div>
		</main>
	)
}

export default Home
