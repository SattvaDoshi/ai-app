import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='top-0 left-0 right-0 p-4 z-50 bg-white shadow-sm flex justify-between'>
      <div>
        
      </div>
      <div className='container mx-auto flex justify-end items-center'>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;