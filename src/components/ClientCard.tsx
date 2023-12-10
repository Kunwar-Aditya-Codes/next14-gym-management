'use client';

import Image from 'next/image';

interface ClientCardProps {
  name: string;
  url: string;
}

const ClientCard = ({ name, url }: ClientCardProps) => {
  return (
    <div className='hover:ring-2 shadow-md ring-violet-500 rounded-lg border-zinc-900 cursor-pointer border py-4 pl-4 '>
      <div className='flex items-center gap-4'>
        <div>
          <Image
            src={url}
            width={500}
            height={500}
            className='w-8 h-8 rounded-full'
            alt='client profile pic'
          />
        </div>
        <h1 className='uppercase tracking-wider  '>{name}</h1>
      </div>
    </div>
  );
};
export default ClientCard;
