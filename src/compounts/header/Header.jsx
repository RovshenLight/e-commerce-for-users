import React from 'react'
import './header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {sliderUnits} from '../../data/data'
import { useState, useEffect } from 'react'
import { BiRightArrow } from 'react-icons/bi'
import { BiLeftArrow } from 'react-icons/bi'

const Header = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const totalSlides = sliderUnits.length;

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [totalSlides]);


  const stopAutoSlide = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const startAutoSlide = () => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    setIntervalId(id);
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      startAutoSlide();
    }, 10000);
    setTimeoutId(id);
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      startAutoSlide();
    }, 10000);
    setTimeoutId(id);
  };


  return (
    <div className='header'>
      <button className='prev' onClick={handlePrev}><BiLeftArrow /></button>
      <div className='header_container' style={{ transform: `translateX(-${currentIndex * 100}%) `}}>
      {sliderUnits.map((slider, index) => (
      <header key={slider.id} style={{ backgroundColor: `#${slider.bg}` }}>
        <div className="left">
          <h1>{slider.title}</h1>
          <h2>{slider.desc}</h2>
          <button><Link to='/Productslist'>Shop Now</Link></button>
        </div>
        <div className="right">
          <div className="right_bg gradient-background"></div>
          <img src={slider.img} alt="Hero" />
        </div>
      </header>
      ))}
      </div>
      <button className='next' onClick={handleNext}><BiRightArrow /></button>
    </div>
  )
}

export default Header