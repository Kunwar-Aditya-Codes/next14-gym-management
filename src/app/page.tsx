import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-blue-100   sm:text-6xl'>
            Elevate Your <span className='text-blue-500'>Fitness</span> Business
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground '>
            Streamline Schedules, Boost Client Success: Unleash the Power of
            Effortless Gym Trainer Management!
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
