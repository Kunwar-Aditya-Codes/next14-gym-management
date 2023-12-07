'use client';

import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex-grow-0'>
      <MaxWidthWrapper>
        <div className='pb-10 md:flex md:items-center border-t border-zinc-300 pt-6 md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-zinc-700'
              >
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-zinc-700'
              >
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-zinc-700'
              >
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
