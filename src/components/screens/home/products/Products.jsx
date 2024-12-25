import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

import Card from '@components/ui/card/Card';

import './Products.scss';

const Products = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [cardsData, setCardsData] = useState([]); // Состояние для хранения данных карточек

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const productsSection = document.querySelector('.products');
    if (productsSection) {
      observer.observe(productsSection);
    }

    return () => {
      if (productsSection) {
        observer.unobserve(productsSection);
      }
    };
  }, []);

  useEffect(() => {
    // Пример загрузки данных с API. Обновите URL на ваш API.
    const fetchCards = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=6');
        const data = await response.json();
        setCardsData(data); // Сохраняем данные карточек
      } catch (error) {
        console.error('Ошибка загрузки карточек:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <section className={`products ${isVisible ? 'visible' : ''}`}>
      <div className="wrapper">
        <h2 className="products-title">{t('productsTitle')}</h2>
        <div className="products-contents flex items-center justify-center gap-x-5 gap-y-8">
          {cardsData.slice(0, 6).map((card, index) => (
            <Card key={index} page={card.id} /> // Передаем данные каждой карточке
          ))}
        </div>
        <a href="/buy-property" className="products-btn">
          {t('viewMore')} <FaArrowRightLong className="products-arrow" />
        </a>
      </div>
    </section>
  );
};

export default Products;
