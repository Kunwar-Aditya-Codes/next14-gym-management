import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import TrainerTestimonials from '@/components/TrainerTestimonials';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ActivityIcon, SmileIcon, CheckSquareIcon } from 'lucide-react';

export default function Home() {
  const perks = [
    {
      name: 'Easy Progress Tracking',
      Icon: ActivityIcon,
      description:
        'Get your assets delivered to your email in seconds and download them right away.',
    },
    {
      name: 'User Friendly Interface',
      Icon: SmileIcon,
      description:
        'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
    },
    {
      name: 'Efficient Management',
      Icon: CheckSquareIcon,
      description:
        "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
    },
  ];
  return (
    <>
      <MaxWidthWrapper className='h-[80vh]'>
        <div className='py-28 h-full  mx-auto text-center flex flex-col items-center justify-evenly   max-w-3xl '>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800  sm:text-6xl'>
              Elevate Your <span className='text-rose-500'>Fitness</span>{' '}
              Business
            </h1>
            <p className='mt-6 text-lg max-w-prose text-muted-foreground '>
              Streamline Schedules, Boost Client Success: Unleash the Power of
              Effortless Gym Trainer Management!
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href={'/sign-up'}
              className={buttonVariants({
                variant: 'default',
                className:
                  'rounded-s-full rounded-e-full py-6 px-6 bg-zinc-800 hover:bg-zinc-950',
              })}
            >
              Get Started &rarr;
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className=''>
        <MaxWidthWrapper className=' '>
          <div className='w-full py-28 px-4 border-t border-zinc-300  text-center '>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
                >
                  <div className='md:flex-shrink-0 flex justify-center'>
                    <div className='h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-rose-100 text-rose-600'>
                      {<perk.Icon className='w-1/2 h-1/2' />}
                    </div>
                  </div>

                  <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                    <h3 className='text-base font-medium text-zinc-800'>
                      {perk.name}
                    </h3>
                    <p className='mt-3 text-sm text-muted-foreground'>
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <TrainerTestimonials />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
