import AddClientDialog from '@/components/AddClientDialog';
import ClientList from '@/components/ClientList';
import { auth } from '@clerk/nextjs';

const page = () => {
  const { userId } = auth();

  return (
    <>
      <div className='rounded-lg shadow flex items-center justify-between  py-3   mt-4 '>
        <h1 className='text-xl text-violet-500 uppercase tracking-wide font-bold'>
          Clients
        </h1>
        <AddClientDialog />
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4'>
        <ClientList adminId={userId as string} />
      </div>
    </>
  );
};
export default page;
