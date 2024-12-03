import React from 'react'
import { FaInstagram, FaPhoneAlt, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import AddressWithIcon from '@components/ui/аddress-wth-icon/address-with-icon'

import './Contacts.scss'

const Contacts = () => {
	return (
		<main className='contacts'>
			<div className='wrapper'>
				<div className='contacts-content'>
					<div className='contacts-content-text'>
						<h2 className='contacts-content-text__title'>KVADRAT.KG</h2>
						<h4 className='contacts-content-text__desc'>
							Работа с <span>kvadrat.kg</span> — это возможность получить доступ
							к широкому спектру качественной недвижимости в Кыргызстане и
							оперативную поддержку экспертов на каждом этапе. Мы предлагаем
							актуальные предложения, проверенную информацию и прозрачные
							условия сотрудничества. С <span>kvadrat.kg</span> вы экономите
							время, находите именно то, что нужно, и получаете уверенность в
							безопасности сделки.
						</h4>
					</div>
					<div className='contacts-content-social'>
						<span className='contacts-content-social sm-title'>
							Наши соц. сети
						</span>
						<div className='contacts-content-social__icon'>
							<a href='https://api.whatsapp.com/send?phone=996708242906&text=Здравствуйте, я пишу с сайта kvadrat.kg' className='contacts-content-social social-svg'>
								<FaWhatsapp />
							</a>
							<a href='https://www.instagram.com/_kvadrat_kg?igsh=MW95eng2NHJpMnZqYQ==' className='contacts-content-social social-svg'>
								<FaInstagram />
							</a>
							<a href='https://www.tiktok.com/@kvadrat_kg?_t=8rQuPC6UAVw&_r=1' className='contacts-content-social social-svg'>
								<FaTiktok />
							</a>
						</div>
					</div>
					<div className='contacts-content-contact'>
						<span className='contacts-content-contact sm-title'>
							Наши контакты
						</span>
						<div>
							<AddressWithIcon
								icon={FaPhoneAlt}
								text='+996 708 242 906'
								href={'tel:+996708242906'}
								id={'phoneNumberLink'}
								style={{
									color: '#434c51',
									fontSize: '14px',
									fontWeight: '500',
									marginBottom: '10px',
								}}
							/>
							<AddressWithIcon
								icon={FaPhoneAlt}
								text='+996 557 030 896'
								href={'tel:+996557030896'}
								id={'phoneNumberLink'}
								style={{
									color: '#434c51',
									fontSize: '14px',
									fontWeight: '500',
									marginBottom: '10px',
								}}
							/>
							<AddressWithIcon
								icon={MdEmail}
								text='kvadrat.ned@gmail.com'
								href={'mailto:kvadrat.ned@gmail.com'}
								id={'email'}
								style={{
									color: '#434c51',
									fontSize: '14px',
									fontWeight: '500',
								}}
							/>
						</div>
					</div>
					<div className='contacts-content-schedule'>
						<span className='contacts-content-schedule sm-title'>
							График работы
						</span>
						<p className='contacts-content-schedule sm-desc'>
							Мы работаем без выходных
						</p>
						<p className='contacts-content-schedule sm-desc'>
							с 10:00 - до 19:00
						</p>
					</div>
					<div className='contacts-content-map'>
						<span className='contacts-content-map sm-title'>Наш офис</span>
						<p className='contacts-content-map sm-desc mb-[10px]'>
							Адрес: Бишкек, ул. Тимирязева, 97.
						</p>
						<div className='contacts-content-map__wrapper'>
							<iframe
								src='https://yandex.com/map-widget/v1/?um=constructor%3A579388f09e0cf72ddfcf72ece075517f0c57929b7ebc08e1bbeebf2fadcdc6f0&amp;source=constructor'
								width='100%'
								height='400'
								frameborder='0'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Contacts
