import AddClientDialog from '@/components/AddClientDialog';
import ClientCard from '@/components/ClientCard';

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
      <div className='rounded-lg shadow flex items-center justify-between px-4 py-3  bg-white mt-4 '>
        <h1 className='text-xl text-rose-500 uppercase tracking-wide font-bold'>
          Clients
        </h1>
        <AddClientDialog />
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
        {fakeClients.map((client, i) => (
          <ClientCard name={client.name} url={client.url} key={i} />
        ))}
      </div>
    </>
  );
};
export default page;
