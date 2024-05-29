import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './SplideSlider.css';

const SplideSlider = ({ images }) => {
    const splideOptions = {
        type: 'fade',
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: true,
        fixedWidth: '1200px',
        fixedHeight: '600px',
        gap: '2rem',
        autoplay: true,
        interval: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    };

    return (
        <div className='splide-container'>
            <Splide options={splideOptions} className="splide">
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default SplideSlider;
