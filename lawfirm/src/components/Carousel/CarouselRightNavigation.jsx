
import {ReactComponent as RightArrow} from '../../assets/RightArrow.svg'
import { useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';
import "swiper/css";

const CarouselRightNavigation = () => {
    const swiper = useSwiper();

  return (
    <div className={styles.rightNavigation}>
         <RightArrow onClick={()=> swiper.slideNext()} />
    </div>
  )
}

export default CarouselRightNavigation