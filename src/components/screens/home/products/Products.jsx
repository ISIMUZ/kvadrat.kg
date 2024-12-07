import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

import Card from '@components/ui/card/Card';

import './Products.scss';

const Products = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section className={`products ${isVisible ? 'visible' : ''}`}>
      <div className='wrapper'>
        <h2 className='products-title'>{t('productsTitle')}</h2>
        <div className='products-contents flex items-center justify-center gap-x-5 gap-y-8'>
          <Card page={1} />
          <Card page={2} />
          <Card page={3} />
          <Card page={4} />
          <Card page={5} />
          <Card page={6} />
        </div>
        <a href="/buy-property" className='products-btn'>
          {t('viewMore')} <FaArrowRightLong className='products-arrow' />
        </a>
      </div>
    </section>
  );
};

export default Products;
