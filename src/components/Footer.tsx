'use client';

import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex-grow-0'>
      <MaxWidthWrapper>
        <div className='pb-10 md:flex md:items-center border-t border-zinc-700 pt-6 md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm '>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link href='#' className='text-sm '>
                Terms
              </Link>
              <Link href='#' className='text-sm '>
                Privacy Policy
              </Link>
              <Link href='#' className='text-sm '>
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
