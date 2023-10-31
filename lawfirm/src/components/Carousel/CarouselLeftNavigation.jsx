
import styles from "./Carousel.module.css";
import {ReactComponent as LeftArrow} from '../../assets/LeftArrow.svg'
import { useSwiper } from 'swiper/react';
import "swiper/css";


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
   
  return (
    <div className={styles.leftNavigation}>
        <LeftArrow onClick={()=> swiper.slidePrev()} />
    </div>
  )
}

export default CarouselLeftNavigation