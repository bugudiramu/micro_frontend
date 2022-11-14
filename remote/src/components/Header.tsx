import React from 'react';

const Header = () => {
  return (
    <div className='bg-gray-300 flex flex-row justify-between'>
      <div>Header</div>
      <ul className='flex gap-3'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
