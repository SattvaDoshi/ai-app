import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className='py-4 z-50 bg-white shadow-sm flex justify-between'>
      <div>
        
      </div>
      <div className='pr-4 flex justify-end items-center'>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;