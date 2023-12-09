import AddClientDialog from '@/components/AddClientDialog';
import ClientCard from '@/components/ClientCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const fakeClients = [
  {
    name: 'Adma George',
    url: '/download.png',
  },
  {
    name: 'Code George',
    url: '/download.png',
  },
  {
    name: 'Emma Watson',
    url: '/download.png',
  },
  {
    name: 'Lia Paul',
    url: '/download.png',
  },
  {
    name: 'Adma George',
    url: '/download.png',
  },
  {
    name: 'Code George',
    url: '/download.png',
  },
  {
    name: 'Emma Watson',
    url: '/download.png',
  },
  {
    name: 'Lia Paul',
    url: '/download.png',
  },
  {
    name: 'Emma Watson',
    url: '/download.png',
  },
  {
    name: 'Lia Paul',
    url: '/download.png',
  },
];

const page = () => {
  return (
    <>
      <MaxWidthWrapper className='h-[80vh]'>
        <div className=' h-full flex items-center gap-x-6 py-4 '>
          <div className='flex-[0.5] relative px-4 pb-4 overflow-hidden  h-full rounded-lg border border-gray-200  bg-white'>
            <div className='h-[65vh]'>
              <div className='overflow-y-scroll divide-y-2 divide-zinc-200 h-full pr-4'>
                {fakeClients.map((client, i) => (
                  <ClientCard name={client.name} url={client.url} key={i} />
                ))}
              </div>
            </div>
            <div className='bottom-0 p-4 absolute bg-white border-t left-0 right-0'>
              <AddClientDialog />
            </div>
          </div>
          <div className='flex-[0.5] h-full rounded-lg border border-gray-200 flex  items-center justify-center bg-white'>
            <div className='text-center space-y-2'>
              <h1 className='text-xl font-bold text-muted-foreground'>
                Excercise Feature
              </h1>
              <p className='p-2 rounded-lg bg-rose-300 text-white'>
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};
export default page;
