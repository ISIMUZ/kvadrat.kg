import React from 'react'

import './Btn.scss'

const Btn = ({ type, style, ...props }) => {
	return (
		 <button className='wave-btn' {...props}>
				<span className='wave-btn__text'>Отправить</span>
				<span className='wave-btn__waves'></span>
		 </button>
	);
};


export default Btn
