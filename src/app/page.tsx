import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import TrainerTestimonials from '@/components/TrainerTestimonials';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-24  mx-auto text-center flex flex-col items-center max-w-3xl '>
          <h1 className='text-4xl font-bold tracking-tight text-blue-100  sm:text-6xl'>
            Elevate Your <span className='text-blue-500'>Fitness</span> Business
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground '>
            Streamline Schedules, Boost Client Success: Unleash the Power of
            Effortless Gym Trainer Management!
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href={'/sign-up'}
              className={buttonVariants({
                variant: 'secondary',
              })}
            >
              Get Started &rarr;
            </Link>
          </div>
        </div>
        <TrainerTestimonials />
      </MaxWidthWrapper>
    </>
  );
}
