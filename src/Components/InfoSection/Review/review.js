import React, { useState, useMemo, useRef, useEffect } from 'react'
import './review.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-stars';
import {motion} from 'framer-motion';


export const Review = () => {

  const [counterOn, setCounterOn] = useState(false);
  const isMobileScreen = window.innerWidth < 950 ? true : false;

  const reviewData = [
    {
      name: 'Shubh',
      comment: 'It was a very good experience...the astrologer was on point, was very calm in explaining everything.',
      rating: 5
    },
    {
      name: 'Alice',
      comment: 'It was a very good experience...the astrologer was on point, was very calm in explaining everything.',
      rating: 5
    },
    {
      name: 'Bryce',
      comment: 'It was a very good experience...the astrologer was on point, was very calm in explaining everything.',
      rating: 4
    },
    {
      name: 'Vibhore',
      comment: 'It was a very good experience...the astrologer was on point, was very calm in explaining everything.',
      rating: 5
    },
    {
      name: 'Bryce',
      comment: 'It was a very good experience...the astrologer was on point, was very calm in explaining everything.',
      rating: 4
    },
    {
      name: "Jane",
      rating: 5,
      comment: "I had a great astrology consultation session. The astrologer was knowledgeable and helped me gain insights into my life."
    },
    {
      name: "Max",
      rating: 5,
      comment: "The astrology consultation was amazing. The astrologer was very friendly and made me feel comfortable. I learned so much about myself and my future."
    },
    {
      name: "Olivia",
      rating: 5,
      comment: "The astrology consultation was very insightful. The astrologer answered all my questions and provided valuable guidance. I would definitely recommend it to others."
    },
    {
      name: "Lucas",
      rating: 5,
      comment: "I had a wonderful experience with the astrology consultation. The astrologer was professional and provided accurate insights into my life. I would definitely come back for another session."
    },
    {
      name: "Sophia",
      rating: 5,
      comment: "The astrology consultation was amazing. The astrologer was very patient and explained everything in detail. I left the session feeling more positive about my future."
    }

  ]

  const settings = {
    infinite: true,
    autoplaySpeed:3000,
    speed:500,
    slidesToShow:isMobileScreen?1:3,
    slidesToScroll:isMobileScreen?1:1,
    autoplay:true,
    arrows:false,
    centerMode:true,
  }

 
  

  return (

    <div className='review_container'>
      <motion.strong
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      animate={{y:-20}}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.4 }}
      className='strong_review_header'
                     
      >
        What our clients have to say...
      </motion.strong>

      <div className='slider_comp'>
        {reviewData.map((item, index) => (
          <div className='review_card' key={index}>
            <div className='content_area'>
              <strong>{item.name}</strong>
              <ReactStars
                count={5}
                value={item.rating}
                size={24}
                edit={false}
                color1={'#000'}
                color2={'#ffd700'} />
              <p>&ldquo;{item.comment}&rdquo;</p>
            </div>
          </div>

        ))}
      </div>

    </div>

  )
}

