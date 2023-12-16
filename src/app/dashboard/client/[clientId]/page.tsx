import ClientProfile from '@/components/ClientProfile';
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
        <ClientProfile clientId={clientId} />

        <div className='border border-zinc-700 flex items-center justify-center rounded-[5px] lg:flex-[0.6] shadow-xl p-4 h-full'>
          <h1 className='font-bold text-3xl text-muted-foreground'>
            Progress tacking soon!
          </h1>
        </div>
      </div>
    </div>
  );
};
export default page;
