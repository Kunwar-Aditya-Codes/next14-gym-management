'use client';

import { usePathname } from 'next/navigation';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const pathname = usePathname();
  const pathsToMinimize = ['/verify-email', '/sign-up', '/sign-in'];

  return (
    <footer className='flex-grow-0'>
      <MaxWidthWrapper>
        <div className='border-t border-zinc-800'>
          {pathsToMinimize.includes(pathname) ? null : (
            <div className=' pt-16'>
              <div className='flex justify-center'>
                <Image
                  src={'/main-logo.svg'}
                  className='w-28 h-28'
                  width={16}
                  height={16}
                  alt=''
                />
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                <div className='absolute inset-0 overflow-hidden rounded-lg'>
                  <div
                    aria-hidden='true'
                    className='absolute  inset-0 bg-gradient-to-br bg-opacity-90'
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='pb-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-white'>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link href='#' className='text-sm text-white hover:text-gray-200'>
                Terms
              </Link>
              <Link href='#' className='text-sm text-white hover:text-gray-200'>
                Privacy Policy
              </Link>
              <Link href='#' className='text-sm text-white hover:text-gray-200'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
