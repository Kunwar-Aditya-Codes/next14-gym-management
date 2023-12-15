'use client';

import { trpc } from '@/trpc/client';
import Image from 'next/image';

interface ClientProfileProps {
  clientId: string;
}

const ClientProfile = ({ clientId }: ClientProfileProps) => {
  const { data: client, isLoading } = trpc.admin.getClientInfo.useQuery({
    clientId,
  });

  console.log(client);

  return (
    <div className='bg-[url("/blob.svg")] bg-cover bg-center rounded-[5px] lg:flex-[0.4] flex items-start p-4 h-full'>
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
  );
};
export default ClientProfile;
