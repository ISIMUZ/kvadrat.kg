import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdOutlineLaptopChromebook } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'

import AddressWithIcon from '@components/ui/аddress-wth-icon/address-with-icon'

import './Footer.scss'

const Footer = () => {
	return (
		<footer className='footer pt-[80px] pb-[80px] bg-[#2c2c2c]'>
			<div className='wrapper grid grid-cols-3'>
				<div className='footer-colums'>
					<h2 className='footer-titles text-lg mb-5 font-medium text-[#eeeeee]'>
						Наши контакты
					</h2>
					<div className='footer-box flex flex-col gap-y-[12px]'>
						<AddressWithIcon
							icon={IoLocationSharp}
							text='Тимирязева 97'
							href={
								'https://2gis.kg/bishkek/geo/15763234351109669/74.580420,42.880058'
							}
						/>
						<AddressWithIcon
							icon={FaWhatsapp}
							text='WhatsApp'
							href={
								'https://api.whatsapp.com/send?phone=996708242906&text=Здравствуйте, я пишу с сайта kvadrat.kg'
							}
						/>
						<AddressWithIcon
							icon={FaPhoneAlt}
							text='+996 708 242 906'
							href={'tel:+996708242906'}
							id={'phoneNumberLink'}
						/>
						<AddressWithIcon
							icon={FaPhoneAlt}
							text='+996 557 030 896'
							href={'tel:+996557030896'}
							id={'phoneNumberLink'}
						/>
						<AddressWithIcon
							icon={MdEmail}
							text='kvadrat.ned@gmail.com'
							href={'mailto:kvadrat.ned@gmail.com'}
							id={'email'}
						/>
						<AddressWithIcon
							icon={MdOutlineLaptopChromebook}
							text='Квадратный Метр'
							href={'https://kvadrat.kg'}
						/>
					</div>
				</div>
				<div className='footer-colums'></div>
				<div className='footer-colums'></div>
			</div>
		</footer>
	)
}

export default Footer
