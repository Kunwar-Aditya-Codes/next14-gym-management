import Image from 'next/image';

interface PageParams {
  params: {
    clientId: string;
  };
}

const page = ({ params }: PageParams) => {
  const { clientId } = params;

  return (
    <div className='grid w-full h-full py-4'>
      <div className='flex flex-col w-full lg:flex-row lg:items-start gap-6 min-h-[15rem]'>
        <div className=' bg-[url("/blob.svg")] bg-cover bg-center rounded-[5px] lg:flex-[0.4] flex items-start p-4 h-full'>
          <div className='flex-[0.5]'>
            <Image
              src={'/person-1.png'}
              alt='profile'
              width={500}
              height={500}
              className='w-full sm:w-1/3 lg:w-full'
            />
          </div>
          <div className='flex-[0.5] p-2 ml-3 space-y-4 '>
            <h1 className='text-lg lg:text-4xl font-bold'>John Doe</h1>
            <p className='text-muted-foreground'>jd@email.com</p>
            <p className='text-muted-foreground'>23 years</p>
            <p className='text-muted-foreground'>163 cm</p>
            <p className='text-muted-foreground'>78 kg</p>
          </div>
        </div>
        <div className='border border-zinc-700 flex items-center justify-center rounded-[5px] lg:flex-[0.6] shadow-xl p-4 h-full'>
          <h1 className='font-bold text-3xl text-muted-foreground'>
            Progress tacking soon!
          </h1>
        </div>
      </div>
      <div className='border border-zinc-700 rounded-[5px] mt-6'></div>
    </div>
  );
};
export default page;
