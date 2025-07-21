import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../store/reducers/ProductSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './Card';

function Cards() {
  const products = useSelector(selectProducts);

  return (
    <div className='px-10 py-12 bg-black text-white'>
      <h3 className='text-center text-3xl font-bold text-blue-500 mb-12 tracking-wide'>
        # Featured Products
      </h3>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        freeMode={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card product={product} />
          </SwiperSlide>
        ))}

        {/* Final Slide: Explore All */}
        <SwiperSlide key="explore-all">
          <div
            onClick={() => window.location.href = '/products'}
            className="h-[336px] flex flex-col items-center justify-center bg-zinc-900 text-white rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(245,245,245,0.4)] transition shadow-md mt-5 hover:mt-2 mr-2" 
          >
            <h3 className="text-xl font-semibold mb-3">Explore All Products</h3>
            <button className="px-5 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">
              View All
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Cards;
