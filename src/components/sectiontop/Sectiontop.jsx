import './Sectiontop.css';
import { useState } from 'react';

const Sectiontop = () => {
    const images = [
        'https://avatars.mds.yandex.net/i?id=39fc0e1e91f2746660611996298dbfaa_l-5291151-images-thumbs&n=13',
        'https://img.goodfon.com/original/2400x1775/3/ec/kartina-cvety-osen-oboi.jpg',
        'https://i.pinimg.com/736x/3f/14/98/3f1498b03903e6a2ecf4cd0b3fab2620.jpg'
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className='sectiontop col-10'>
            <div className="slider">
                <img src={images[currentSlide]} alt="slide" className="slider-image" />
                <button onClick={prevSlide} className="prev-button">Previous</button>
                <button onClick={nextSlide} className="next-button">Next</button>
            </div>
        </div>
    );
};

export default Sectiontop;
