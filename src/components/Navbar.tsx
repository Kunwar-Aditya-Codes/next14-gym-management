import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';
import { currentUser, UserButton } from '@clerk/nextjs';
import { buttonVariants } from './ui/button';

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className='sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white '>
        <MaxWidthWrapper>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center'>
              <div className='ml-4 flex lg:ml-0'>
                <Link href={'/'} className=''>
                  <Image
                    src={'/logo.png'}
                    className='w-12 h-12'
                    width={500}
                    height={500}
                    alt='dumbbelle logo'
                  />
                </Link>
              </div>

              <div className='ml-auto flex items-center '>
                <div className=' hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  {user ? null : (
                    <Link
                      href={'/sign-in'}
                      className={buttonVariants({
                        variant: 'ghost',
                      })}
                    >
                      Sign In
                    </Link>
                  )}

                  {user ? null : (
                    <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                  )}

                  {user ? (
                    <UserButton />
                  ) : (
                    <Link
                      href={'sign-up'}
                      className={buttonVariants({
                        variant: 'ghost',
                      })}
                    >
                      Create Account
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
export default Navbar;
