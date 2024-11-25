import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-neonGreen text-2xl font-impact">
          FREE DOWNLOAD!
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-neonPink hover:text-neonBlue transition-colors duration-300">
            홈
          </Link>
          {/* 추가적인 네비게이션 링크를 여기에 추가할 수 있습니다 */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
