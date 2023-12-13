'use client';
import Image from 'next/image';
import { ClientInfo } from './ClientList';

interface ClientCardProps {
  client: ClientInfo;
}

const ClientCard = ({ client }: ClientCardProps) => {
  return (
    <div className='hover:ring-2 shadow-md ring-violet-500 rounded-lg border-zinc-900 cursor-pointer border py-4 pl-4 '>
      <div className='flex items-center gap-4'>
        <div>
          {/* <Image
            src={url}
            width={500}
            height={500}
            className='w-8 h-8 rounded-full'
            alt='client profile pic'
          /> */}
        </div>
        <h1 className='uppercase tracking-wider'>{client.clientName}</h1>
      </div>
    </div>
  );
};
export default ClientCard;
