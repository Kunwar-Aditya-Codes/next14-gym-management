'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import type SwiperType from 'swiper';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const ImageSlider = () => {
  const testimonials = [
    {
      name: 'Alice Johnson',
      image: '/person-2.png',
      review:
        'Absolutely fantastic service! The team went above and beyond to meet my expectations. I highly recommend their expertise.',
      date: '2023-01-15',
    },
    {
      name: 'Bob Smith',
      image: '/person-1.png',
      review:
        'I was impressed with the quality of the product and the quick delivery. Excellent customer support too. Will definitely buy again!',
      date: '2023-02-28',
    },
    {
      name: 'Charlie Davis',
      image: '/person-3.png',
      review:
        "The professionalism and attention to detail were outstanding. I couldn't be happier with the results. Thank you for a job well done.",
      date: '2023-03-12',
    },
    {
      name: 'Diana Rodriguez',
      image: '/person-2.png',
      review:
        "I've had a great experience working with this team. They are responsive, creative, and delivered a top-notch solution. Highly recommended!",
      date: '2023-04-05',
    },
    {
      name: 'Evan Williams',
      image: '/person-1.png',
      review:
        'The product exceeded my expectations. The attention to detail and craftsmanship are commendable. Truly satisfied with my purchase.',
      date: '2023-05-20',
    },
  ];

  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (testimonials.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on('slideChange', ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (testimonials.length ?? 0) - 1,
      });
    });
  }, [swiper, testimonials]);

  const activeStyles =
    'active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300';

  const inactiveStyles = 'hidden text-gray-400';

  return (
    <div className='group relative p-2 py-4 w-full h-auto overflow-hidden rounded-xl'>
      <div className='absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition'>
        <button
          className={cn(activeStyles, 'right-3 transition', {
            [inactiveStyles]: slideConfig?.isEnd,
            'hover:bg-primary-300 text-primary-800 opacity-100':
              !slideConfig.isEnd,
          })}
          aria-label='next image'
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
        >
          <ChevronRightIcon className='h-4 w-4 text-zinc-700' />
        </button>
        <button
          className={cn(activeStyles, 'left-3 transition', {
            [inactiveStyles]: slideConfig?.isBeginning,
            'hover:bg-primary-300 text-primary-800 opacity-100':
              !slideConfig.isBeginning,
          })}
          aria-label='prev image'
          onClick={(e) => {
            e.preventDefault();
            swiper?.slidePrev();
          }}
        >
          <ChevronLeftIcon className='h-4 w-4 text-zinc-700' />
        </button>
      </div>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        modules={[Autoplay]}
        slidesPerView={1}
        className='w-[90%] h-full '
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials?.map((testimonial, i) => (
          <SwiperSlide
            key={i}
            className='-z-10 relative  p-4 rounded-xl  border-[0.05px] border-zinc-300 '
          >
            <div className='flex flex-col lg:max-h-[12rem] lg:h-[12rem]  space-y-4 md:space-y-0  md:flex-row-reverse'>
              <div className='flex-grow lg:flex-[0.3]  w-full'>
                <Image
                  width={1000}
                  height={1000}
                  className='aspect-square max-w-[250px] max-h-[250px] w-full h-full object-cover object-top rounded-xl mx-auto'
                  loading='eager'
                  alt='testimonial image'
                  src={testimonial?.image}
                />
              </div>
              <div className='flex-auto lg:flex-[0.7] md:px-4 text-justify'>
                <h1 className='text-xl text-center text-zinc-800 md:text-left md:text-2xl font-medium'>
                  {testimonial?.name}
                </h1>
                <p className='text-sm mt-1 text-muted-foreground font-bold text-center md:text-left'>
                  {testimonial?.date}
                </p>
                <p className='mt-6 md:text-sm  italic md:pr-16'>
                  &apos;{testimonial?.review}&apos;
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageSlider;
