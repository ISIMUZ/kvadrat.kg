import React from 'react'

import './Intro-Text.scss'

const IntroText = ({
	title,
	suptitle,
	reasons1,
	reasons2,
	reasons3,
	reasons4,
}) => {
	return (
		<section className='intro-text'>
			<div className='intro-text-content'>
				<h2 className='intro-text-content__title'>{title}</h2>
				<h2 className='intro-text-content__suptitle'>{suptitle}</h2>
				<ul>
					<li>1. {reasons1}</li>
					<li>2. {reasons2}</li>
					<li>3. {reasons3}</li>
					<li>4. {reasons4}</li>
				</ul>
			</div>
		</section>
	)
}

export default IntroText
