'use client';

import Image from 'next/image';

interface ClientCardProps {
  name: string;
  url: string;
}

const ClientCard = ({ name, url }: ClientCardProps) => {
  return (
    <div className=' transition py-4  '>
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
        <h1 className='uppercase tracking-wider text-zinc-700 '>{name}</h1>
      </div>
    </div>
  );
};
export default ClientCard;
