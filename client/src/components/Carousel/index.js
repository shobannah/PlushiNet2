import React from 'react';
import worldwide from '../../assets/worldwide.gif'
import variety from '../../assets/variety.gif'
import conditions from '../../assets/conditions.gif'
import greatprices from '../../assets/greatprices.gif'
import './style.css';

function Carousel() {
  return (
    <div className='body'>
      
      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          <li id="carousel__slide1"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"><img className="carouselimg" src={worldwide} alt="worldwide..." /> </div>
              <a href="#carousel__slide4"
                class="carousel__prev">Go to last slide</a>  
              <a href="#carousel__slide2"
                class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide2"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"><img className="carouselimg" src={variety} alt="variety..." /> </div>
            <a href="#carousel__slide1"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3"
              class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"><img className="carouselimg" src={conditions} alt="conditions..." /> </div>
            <a href="#carousel__slide2"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4"
              class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide4"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"><img className="carouselimg" src={greatprices} alt="greatprices..." /></div>
            <a href="#carousel__slide3"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1"
              class="carousel__next">Go to first slide</a>
          </li>
        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
              <a href="#carousel__slide1"
                class="carousel__navigation-button">Go to slide 1</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide2"
                class="carousel__navigation-button">Go to slide 2</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide3"
                class="carousel__navigation-button">Go to slide 3</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide4"
                class="carousel__navigation-button">Go to slide 4</a>
            </li>
          </ol>
        </aside>
      </section>
    </div>
  );
}

export default Carousel;