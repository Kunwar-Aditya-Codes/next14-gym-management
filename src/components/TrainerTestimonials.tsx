'use client';

import ImageSlider from './ImageSlider';

const TrainerTestimonials = () => {
  return (
    <section className='py-12 '>
      <div className='md:flex md:items-center md:justify-between mb-4'>
        <div className='w-full px-4  text-center '>
          <h1 className='text-2xl text-center font-normal decoration-blue-500 underline underline-offset-8 sm:text-3xl'>
            Testimonials
          </h1>
        </div>
      </div>

      <div className='relative'>
        <div className='mt-6 flex items-center justify-center w-full '>
          <div className='w-full    '>
            {/* List testimonials */}
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrainerTestimonials;
