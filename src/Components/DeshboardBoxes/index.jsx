import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { GoGift } from "react-icons/go";
import { BsTextParagraph } from "react-icons/bs";
import { PiBank } from "react-icons/pi";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiProductHuntLine } from "react-icons/ri";



const DeshboardBoxes = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
          <SwiperSlide >
            <div className="box p-5 cursor-pointer hover:bg-gray-100 bg-white shadow-sm rounded-md border border-gray-300 flex items-center gap-4">
              <GoGift className='text-[50px] text-blue-900' />
              <div className="info w-[70%]">
                <h3>New Orders</h3>
                <b>2,100</b>
              </div>
              <BsTextParagraph className='text-[50px] text-blue-900' />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="box p-5 cursor-pointer hover:bg-gray-100 bg-white shadow-sm rounded-md border border-gray-300 flex items-center gap-4">
              <GoGift className='text-[30px] text-[#10b987]' />
              <div className="info w-[70%]">
                <h3>Sales</h3>
                <b>5,120</b>
              </div>
              <BsTextParagraph className='text-[30px] text-[#10b987]' />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="box p-5 cursor-pointer hover:bg-gray-100 bg-white shadow-sm rounded-md border border-gray-300 flex items-center gap-4">
              <PiBank className='text-[30px] text-[#7928ca]' />
              <div className="info w-[70%]">
                <h3>Revanue</h3>
                <b>10,200</b>
              </div>
              <BsTextParagraph className='text-[30px] text-[#7928ca]' />
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="box p-5 cursor-pointer hover:bg-gray-100 bg-white shadow-sm rounded-md border border-gray-300 flex items-center gap-4">
              <RiProductHuntLine className='text-[30px] text-[#3c26a5]' />
              <div className="info w-[70%]">
                <h3>Total Products</h3>
                <b>10,200</b>
              </div>
              <RiShoppingBagLine className='text-[30px] text-[#3c26a5]' />
            </div>
          </SwiperSlide>
          
      </Swiper>
    </div>
  );
};

export default DeshboardBoxes;