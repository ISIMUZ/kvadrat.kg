import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

import './Details.scss'

const Details = () => {
	const { title } = useParams()
	const location = useLocation()
	const { image } = location.state || {}

	if (!image) {
		return <div>Данные объекта не найдены</div>
	}

	return (
		<div className='details'>
			<div className='container'>
				<div className='details-content'>
					<div className='details-content__img'>
						<img src={image.download_url} alt='img' />
					</div>
				</div>
				<div className='details-content-info'>
					<h1>
					Элитка, 3 ком, 140 м2, этаж 9/12, ж/к Арт Сити (Art City), Сост: Строящийся ПСО
						{decodeURIComponent(title)}
					</h1>
					<div className='details-content-info__top'>
						<h3>ID объекта: <span>00110</span></h3>
						<h3>Серия: <span>Элитка</span></h3>
						<h3>Этаж: <span>7</span>/<span>12</span></h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Details

// import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'

// import 'swiper/css'
// import 'swiper/css/free-mode'
// import 'swiper/css/navigation'
// import 'swiper/css/thumbs'

// import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

// export default function App() {
// 	const [thumbsSwiper, setThumbsSwiper] = useState(null)

// 	return (
// 		<>
// 			<Swiper
// 				style={{
// 					'--swiper-navigation-color': '#fff',
// 					'--swiper-pagination-color': '#fff',
// 				}}
// 				loop={true}
// 				spaceBetween={10}
// 				navigation={true}
// 				thumbs={{ swiper: thumbsSwiper }}
// 				modules={[FreeMode, Navigation, Thumbs]}
// 				className='mySwiper2'
// 			>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-5.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-6.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-7.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-8.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-9.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-10.jpg' alt='img'/>
// 				</SwiperSlide>
// 			</Swiper>
// 			<Swiper
// 				onSwiper={setThumbsSwiper}
// 				loop={true}
// 				spaceBetween={10}
// 				slidesPerView={4}
// 				freeMode={true}
// 				watchSlidesProgress={true}
// 				modules={[FreeMode, Navigation, Thumbs]}
// 				className='mySwiper'
// 			>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-5.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-6.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-7.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-8.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-9.jpg' alt='img'/>
// 				</SwiperSlide>
// 				<SwiperSlide>
// 					<img src='https://swiperjs.com/demos/images/nature-10.jpg' alt='img'/>
// 				</SwiperSlide>
// 			</Swiper>
// 		</>
// 	)
// }
