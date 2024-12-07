import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import '@assets/icon/style.css'
import './Intro.scss'

const Intro = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.5 }
    )
    
    const introElement = document.querySelector('.intro')
    if (introElement) {
      observer.observe(introElement)
    }

    return () => {
      if (introElement) {
        observer.unobserve(introElement)
      }
    }
  }, [])

  return (
    <section className={`intro ${isVisible ? 'visible' : ''}`}>
      <h2
        className='intro-title'
        dangerouslySetInnerHTML={{ __html: t('introTitle') }}
      />
      <p className='intro-desc'>
        {t('introDesc')}
      </p>
      <div className='intro-block'>
        <div className='intro-block__box'>
          <i className='ic_trusted'></i>
          <h4 className='intro-outline'>{t('serviceTitle')}</h4>
        </div>
        <div className='intro-block__box'>
          <i className='ic_estate'></i>
          <h4 className='intro-outline'>{t('buySellTitle')}</h4>
        </div>
        <div className='intro-block__box'>
          <i className='ic_services'></i>
          <h4 className='intro-outline'>{t('trustTitle')}</h4>
        </div>
      </div>
    </section>
  )
}

export default Intro
