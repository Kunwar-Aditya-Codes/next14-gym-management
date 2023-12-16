'use client';

import { trpc } from '@/trpc/client';
import Image from 'next/image';
import { ClientInfo } from './ClientList';
import { Loader2 } from 'lucide-react';

interface ClientProfileProps {
  clientId: string;
}

const ClientProfile = ({ clientId }: ClientProfileProps) => {
  const { data, isLoading } = trpc.admin.getClientInfo.useQuery({
    clientId,
  });

  const profile = data?.client as ClientInfo;

  return (
    <div className='bg-[url("/card.svg")]  bg-cover bg-no-repeat bg-center rounded-[5px] lg:flex-[0.4] flex items-start  h-full'>
      {isLoading ? (
        <div className='w-full h-full flex items-center justify-center'>
          <Loader2 className='h-6 w-6 animate-spin' />
        </div>
      ) : null}

      {profile ? (
        <div className='flex flex-col bg-black/10  lg:flex-row items-center lg:items-start gap-y-4 backdrop-blur-[3px] rounded-md shadow-md p-4 w-full lg:gap-x-8 '>
          <div className='w-full lg:max-w-[8rem] '>
            <Image
              src={'/person-1.png'}
              alt='profile'
              width={500}
              height={500}
              className='w-28 h-28 object-cover rounded-full mx-auto'
            />
          </div>
          <div className='lg:flex-grow-1 p-2 space-y-4 text-center lg:text-start w-full lg:w-auto '>
            <h1 className='text-lg lg:text-4xl font-bold'>
              {profile?.clientName}
            </h1>
            <p className='text-muted-foreground  rounded-xl'>
              {profile?.email}
            </p>
            <p className='text-muted-foreground  rounded-xl'>
              {profile?.age} years
            </p>
            <p className='text-muted-foreground  rounded-xl'>
              {profile?.height} cm
            </p>
            <p className='text-muted-foreground  rounded-xl'>
              {profile?.weight} kg
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ClientProfile;
