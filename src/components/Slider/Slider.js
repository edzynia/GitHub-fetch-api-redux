import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/ Button';
import Dots from '../Dots/Dots';
import Slide from '../Slide/Slide';
import { GIT_HUB_URLS } from '../../config';
import { increment, decrement } from '../../redux/counter/counter-actions';
import { getTech } from '../../redux/technologies/technologies-actions';
import { countSelector } from '../../redux/counter/counter-selectors';
import { technologySelector } from '../../redux/technologies/technologies-selectors';

const Slider = () => {
  const dispatch = useDispatch();
  const slideIndex = useSelector(countSelector);
  const { technology } = useSelector(technologySelector);

  const handleClickNext = () => {
    if (slideIndex < GIT_HUB_URLS.length - 1) {
      dispatch(increment);
    }
  };

  useEffect(() => {
    dispatch(getTech(slideIndex));
  }, [slideIndex, dispatch]);

  const handleClickPrev = () => {
    if (slideIndex === 0) {
      return;
    } else {
      dispatch(decrement);
    }
  };

  return (
    <div className='container-slider'>
      <Slide {...technology} />
      <Button moveSlide={handleClickNext} direction={'next'} />
      <Button moveSlide={handleClickPrev} direction={'prev'} />
      <Dots slideIndex={slideIndex} arrLength={GIT_HUB_URLS.length} />
    </div>
  );
};

export default Slider;
