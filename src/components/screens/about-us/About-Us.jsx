import React from 'react'

import './About-Us.scss'

const AboutUs = () => {
	return (
		<main className='about-us'>
			<div className='container'>
				<div className='about-us-content'>
					<div className='wrapper'>
						<h1 className='about-us-content__title'>
							Агентство недвижимости <span>KVADRAT.KG</span>
						</h1>
						<div className='about-us-content-text'>
							<h4 className='about-us-content-text__desc sm-desc'>
								<span> "KVADRAT KG"</span> — это надежное агентство недвижимости
								в Бишкеке, предлагающее широкий спектр услуг для покупателей,
								продавцов, арендаторов и арендодателей. Наша команда
								профессионалов обеспечивает высокий уровень сервиса,
								индивидуальный подход и экспертное сопровождение на каждом этапе
								сделки.
							</h4>
							<h4 className='about-us-content-text__desc sm-desc'>
								Работая на рынке недвижимости Кыргызстана, мы зарекомендовали
								себя как надежного партнера, которому можно доверить вопросы
								покупки, продажи и аренды жилья, коммерческой недвижимости и
								земельных участков. Мы гордимся обширной базой актуальных
								предложений и стремимся помочь нашим клиентам найти идеальный
								объект, соответствующий их требованиям и бюджету.
							</h4>
							<h4 className='about-us-content-text__desc sm-desc'>
								Наша миссия — сделать процесс поиска и покупки недвижимости
								максимально прозрачным, комфортным и безопасным. Мы понимаем,
								что для наших клиентов покупка или аренда недвижимости — это
								важное решение, и поэтому нацелены на то, чтобы каждый этап
								проходил без лишних забот и рисков.
							</h4>
							<h4 className='about-us-content-text__desc sm-desc'>
								Сотрудничество с <span>"KVADRAT KG"</span> дает вам возможность
								сэкономить время, избежать лишних хлопот и получить гарантии
								надежности сделки. Наши эксперты всегда готовы предоставить вам
								актуальную информацию, провести анализ рынка, ответить на все
								вопросы и предложить только проверенные объекты.
							</h4>
						</div>
						<div className='about-us-content-why'>
							<h3 className='about-us-content-why sm-title'>
								Почему выбирают нас:
							</h3>
							<ul>
								<li className='about-us-content-why__reasons'>
									Профессионализм и опыт на рынке недвижимости.
								</li>
								<li className='about-us-content-why__reasons'>
									Индивидуальный подход к каждому клиенту.
								</li>
								<li className='about-us-content-why__reasons'>
									Прозрачные и честные условия сотрудничества.
								</li>
								<li className='about-us-content-why__reasons'>
									Широкая база проверенных объектов недвижимости.
								</li>
							</ul>
						</div>
						<h4 className='sm-desc'>
							С <span>"KVADRAT KG"</span> ваш путь к идеальной недвижимости
							будет простым, удобным и безопасным. Мы рады помочь вам найти
							жилье вашей мечты или выгодное коммерческое помещение для бизнеса.
						</h4>
						<div className='about-us-content-contact'>
							<h3 className='sm-title'>Контакты</h3>
							<div>
								<h4 className='sm-desc'>
									Наш офис находится по адресу: Бишкек, ул. Тимирязева, 97
								</h4>
								<h4 className='sm-desc'>
									Телефон: <a href='tel:+996708242906'>0708 242 906</a>
								</h4>
								<h4 className='sm-desc'>
									Email:{' '}
									<a href='mailto:kvadrat.ned@gmail.com'>
										kvadrat.ned@gmail.com
									</a>
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default AboutUs
