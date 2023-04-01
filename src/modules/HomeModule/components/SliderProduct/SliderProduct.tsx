import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProduct } from '../../constructor';
import './SliderProduct.styles.scss';
interface SliderProductProps {
    slides: number;
    data: Array<IProduct>
}

const SliderProduct: FC<SliderProductProps> = ({slides, data}) => {
    return (
        <div className='SliderProduct'>
        <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={500}
        autoplay={true}
        >
            {data?.map((item,index) => 
                <SwiperSlide key={index}>
                    <div className='card'>
                        <div className='img_cont'>
                            <img src={item.image} alt="slider" />
                        </div>
                        <h4>{item.name}</h4>
                        <p>{item.priceListBase.price} מחיר</p>
                        <p>{item.packQuant} יח במארז</p>
                        <p>{item.sku} מק״ט</p>
                    </div>
                </SwiperSlide>
            )}
        </Swiper> 
        </div>
    );
};

export default SliderProduct;