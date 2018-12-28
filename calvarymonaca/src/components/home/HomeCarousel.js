import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

// TODO:  Change slide 0 to latest sermon.

const items = [
  {
    src: 'https://www.calvarymonaca.com/images/flash_images/4.jpg',
    altText: 'Sermon Title',
    caption: 'Sermon Series',
    header: 'Sermon Title',
    href: "https://www.google.com",
  },
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
  },
];

const HomeCarousel = () => <UncontrolledCarousel items={items} indicators={true} controls={true} />;

export default HomeCarousel;