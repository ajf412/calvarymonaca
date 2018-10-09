import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.calvarymonaca.com/images/flash_images/1.jpg',
    altText: 'Slide 1',
    caption: '',
    header: ''
  },
  {
    src: 'https://www.calvarymonaca.com/images/flash_images/2.jpg',
    altText: 'Slide 2',
    caption: '',
    header: ''
  },
  {
    src: 'https://www.calvarymonaca.com/images/flash_images/3.jpg',
    altText: 'Slide 3',
    caption: '',
    header: ''
  }
];

const HomeCarousel = () => <UncontrolledCarousel items={items} indicators={false} controls={false} />;

export default HomeCarousel;