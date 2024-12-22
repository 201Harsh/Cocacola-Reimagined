import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Slider = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='text-6xl font-bold text-center mt-10 mb-10 heading'>The Famous Coca-Cola and its Products</h1>
      <Swiper
        className='mySwiper'
        modules={[Navigation, Pagination]}
        pagination={{ type: 'progressbar' }}
        navigation={true}
      >
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1550634487-24e377301911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jYWNvbGF8ZW58MHx8MHx8fDA%3D'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1654943219980-88a45258ad46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvY2Fjb2xhfGVufDB8fDB8fHww'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1636144832475-0d81f893354d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvY2Fjb2xhfGVufDB8fDB8fHww'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1662008653984-cd7731aaa438?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvY2Fjb2xhfGVufDB8fDB8fHww'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1609857545224-d1246e91588b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvY2Fjb2xhfGVufDB8fDB8fHww'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvY2Fjb2xhfGVufDB8fDB8fHww'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1609857545224-d1246e91588b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvY2Fjb2xhfGVufDB8fDB8fHww'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1598805797075-0ad48efc2ab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvY2Fjb2xhfGVufDB8fDB8fHww'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1630404365865-97ff92feba6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGNvY2Fjb2xhfGVufDB8fDB8fHww'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1630979805425-08f5f5f39aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjb2NhY29sYXxlbnwwfHwwfHx8MA%3D%3D'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img
            src='https://images.unsplash.com/photo-1667320929135-eb6cd7c43cbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxjb2NhY29sYXxlbnwwfHwwfHx8MA%3D%3D'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
